---
date: 2024-01-28
topic: pwn.college - introduction and talking web
tags: technical, http request, pwn.college, netcat, curl, python
---

# Brief

In [pwn.college](https://pwn.college/), I'm currently learning about [http requests](https://pwn.college/intro-to-cybersecurity/talking-web).

It taught how to create http requests using `netcat`, `curl`, and `python`.

# What I Learned

## pwn.college - Talking Web

* netcat can be used to send POST or GET request, but we need to craft the request *manually*.

```bash
$ nc localhost 9000
GET / HTTP/1.1
Host: localhost:9000

# enter twice, you'll get response from server
```

* netcat doesn't have builtin support to follow redirect, so we need to do it manually.
* cookie is just a header with key `Cookie`.

# Ideas to Explore in the Future

-
