---
date: 2024-02-13
topic: udemy - learn apache kafka for beginners v3
tags: technical, udemy, kafka
---

# Brief

Today I received invitation from my company to enroll in Udemy course "Learn Apache Kafka for Beginners v3".

# What I Learned

* Order of kafka message is guaranteed only within a partition.
* For each topic, kafka knows in advance which partition a message will be written to.
* For each message, producer can attach a key. If key is null, then kafka will use round-robin to distribute messages across partitions. If key is not null, then kafka will use hash of key to determine partition. This implies that all messages with same key will go to same partition.
* That means, we can ensure ordering of some messages by using same key for them. For example, we want a message is ordered under a specific user, but not necessarily across all user. We can attach `user_id` as key of the messages.

* Kafka has a smart client. The client only need to connect to a single broker (names bootstrap server), then it will know how to connect to the other brokers.
* First, it initiates connection with the bootstrap server along with metadata, then the bootstrap server will send the list of brokers.
* Each broker knows about all brokers. It has all the metadata, i.e: which broker hold data for topic A for partition 1, etc.

* Each partition will have exactly ONE broker as leader, other brokers are replicas.
* Producer will produce data to leader of a partition.


# Ideas to Explore in the Future

Kafka uses murmur2 algorithm to determine the targetPartition of a message. The formula is given as below:

```
targetPartition = Math.abs(Utils.murmur(bytes)) % (numPartition - 1)
```

my question is, when there is changes in `numPartition`, won't that affect the existing messages? Will existing message need to be moved to other partition? If yes, how can they maintain the ordering. All of that while keeping kafka running and serving messages?
