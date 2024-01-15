---
date: 2024-01-15
topic: upgrade-redis
tags: redis
---

# Brief

I'm going to explore upgrading redis version using https://github.com/gopaytech/ansible-redis

## Scope

* redis is used for sentinel
* upgrading from redis `7.0.0` to `7.0.8`

# What I Learned

Since the main use is for upgrading redis version on sentinel, we will ignore usage for master-replica for now.

## Plan

* create sentinel with 3 nodes
* upgrade redis on one node, then
    * check the redis version
    * check the data using `SENTINEL MASTERS` does it match with existing sentinel?
    * check whether it can load existing config (`/etc/redis/sentinel_26379.conf`) or replaced the config with empty one
    * check the log (`/var/log/redis/sentinel.log`) whether any anomaly

## Useful Commands

```bash
redis-cli -p 26379 info server | grep redis_version
redis-cli -p 26379 info sentinel | grep sentinel_masters
redis-cli -p 26379 sentinel masters | wc -l
cat /etc/redis/sentinel_26379.conf | wc -l
systemctl status sentinel_26379
```

## Before Execution

```bash
sentinel_masters:6
260
123
```

* 6 sentinel masters
* 260 lines of `sentinel masters` output
* 123 lines of sentinel config

## After Execution

* there's changes in sentinel config, it adds these 2 config:

```
> maxclients 10000
> timeout 0
```

most likely due to config rewrite and there's some dynamic changes not yet persisted to config file.

* systemd also restarted the service
* connected sentinel stays the same
* new redis version not installed. maybe because the bin file name is the same so ansible consider it as completed already. tried to move the bin file to other name:

```
# before

/opt/redis/bin# ll
total 30980
drwxr-xr-x 2 root root     4096 Oct  3 10:04 ./
drwxr-xr-x 3 root root     4096 Oct  3 10:04 ../
-rwxr-xr-x 1 root root  8114240 Oct  3 10:04 redis-benchmark*
lrwxrwxrwx 1 root root       12 Oct  3 10:04 redis-check-aof -> redis-server*
lrwxrwxrwx 1 root root       12 Oct  3 10:04 redis-check-rdb -> redis-server*
-rwxr-xr-x 1 root root  8083104 Oct  3 10:04 redis-cli*
lrwxrwxrwx 1 root root       12 Oct  3 10:04 redis-sentinel -> redis-server*
-rwxr-xr-x 1 root root 15509152 Oct  3 10:04 redis-server*

# moved to other name
/opt/redis/bin# mv redis-server redis-server-7.0.0
/opt/redis/bin# ll
total 30980
drwxr-xr-x 2 root root     4096 Jan 15 08:43 ./
drwxr-xr-x 3 root root     4096 Oct  3 10:04 ../
-rwxr-xr-x 1 root root  8114240 Oct  3 10:04 redis-benchmark*
lrwxrwxrwx 1 root root       12 Oct  3 10:04 redis-check-aof -> redis-server
lrwxrwxrwx 1 root root       12 Oct  3 10:04 redis-check-rdb -> redis-server
-rwxr-xr-x 1 root root  8083104 Oct  3 10:04 redis-cli*
lrwxrwxrwx 1 root root       12 Oct  3 10:04 redis-sentinel -> redis-server
-rwxr-xr-x 1 root root 15509152 Oct  3 10:04 redis-server-7.0.0*

# after
ll
total 46128
drwxr-xr-x 2 root root     4096 Jan 15 08:43 ./
drwxr-xr-x 3 root root     4096 Oct  3 10:04 ../
-rwxr-xr-x 1 root root  8114240 Jan 15 08:43 redis-benchmark*
lrwxrwxrwx 1 root root       12 Jan 15 08:43 redis-check-aof -> redis-server*
lrwxrwxrwx 1 root root       12 Jan 15 08:43 redis-check-rdb -> redis-server*
-rwxr-xr-x 1 root root  8083104 Jan 15 08:43 redis-cli*
lrwxrwxrwx 1 root root       12 Jan 15 08:43 redis-sentinel -> redis-server*
-rwxr-xr-x 1 root root 15509152 Jan 15 08:43 redis-server*
-rwxr-xr-x 1 root root 15509152 Oct  3 10:04 redis-server-7.0.0*
```

note that last update changed to today.

## Code Changes Needed

* Update ansible to install to `redis-server-{{ redis_version }}`
* Create symlink from `redis-server` to `redis-server-{{ redis_version }}`

MR: https://github.com/gopaytech/ansible-redis/pull/6

## FAQ

1. What happen with the existing redis? will it be replaced or both version run simultanously?

    It will be replaced, but old redis binary will still be available in `/opt/redis/bin/redis-server-{{ redis_version }}` if we re-run the ansible before upgrading the redis version.

1. Can it load data from old redis to new redis?

    For 7.0.0 to 7.0.8, yes.

1. Will it create new empty config?

    No. The role has a check whether sentinel file already exists or not. If it exists, it will not create new one. Ref: https://github.com/gopaytech/ansible-redis/blob/master/tasks/sentinel.yml#L138

# Ideas to Explore in the Future

1. What if we upgrade the major version
2. What about Redis master-replica

## Hypothesis

1. Upgrading major version should not be a problem since redis works pretty generic and stable over few major versions. I've seen dev team upgraded a redis cluster node from `3.2.0` to `5.0.0`, where at one time there exist combination of different versions.
2. Since there's a check whether the config file exists, it won't create a new config file. Therefore the new redis will be using the same config file and has the same config as the old version.
