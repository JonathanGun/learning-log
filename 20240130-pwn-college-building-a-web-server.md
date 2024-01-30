---
date: 2024-01-30
topic: pwn.college - building a web server
tags: technical, pwn.college, low-level, linux, syscall
---

# Brief

In [pwn.college](https://pwn.college/), I'm currently learning about [building a web server](https://pwn.college/program-security/building-a-web-server), but in the context of low level processes. It covers from linux process, syscall, http, and multiprocessing.

# What I Learned

* `open()` syscall will return a file descriptor. it is a small non-negative integer that is used to access the file.
* when it comes to networking, we need to use `socket()` syscall to create a socket. socket is just a file that is linked between two processes. it can be used to send and receive data. socket has 3 arguments:
    * `domain`: the protocol family. for example, `AF_INET` for IPv4, `AF_INET6` for IPv6, `AF_UNIX` for unix domain socket, etc.
    * `type`: the type of the socket. for example, `SOCK_STREAM` for TCP, `SOCK_DGRAM` for UDP, etc.
    * `protocol`: the protocol to be used. for example, `IPPROTO_TCP` for TCP, `IPPROTO_UDP` for UDP, etc.
* next, we need to call `bind()` syscall to bind (connect) the socket to an address. it has 3 arguments:
    * `sockfd`: the socket file descriptor, that we get previously from `socket()` syscall.
    * `addr`: the address to bind to. it is a pointer to `sockaddr` struct.
    * `addrlen`: the length of the address.
* looking into `sockaddr` struct,

```
struct sockaddr {
    unsigned short sa_family;   // address family, AF_xxx
    char           sa_data[14]; // 14 bytes of protocol address
};

struct sockaddr_in {
    short            sin_family;   // e.g. AF_INET, AF_INET6
    unsigned short   sin_port;     // e.g. htons(80)
    struct in_addr   sin_addr;     // e.g: {inet_addr("127.0.0.1")}
    char             __pad[8];
};
```

* for connecting to internet, we need to set `sin_family` to `AF_INET`, `sin_port` to the port we want to connect to, and `sin_addr` to the ip address we want to connect to. `AF_INET` stands for **A**ddress **F**amily **INET**, along with other type of address family, such as `AF_INET6` for IPv6, `AF_UNIX` for unix domain socket, etc.
* next, we need to call `listen()` syscall to listen to the socket. it will mark a socket as a passive socket (socket will be used to accept incoming connection). it has 2 arguments:
    * `sockfd`: the socket file descriptor, that we get previously from `socket()` syscall.
    * `backlog`: the maximum length of the queue of pending connections.

* next, we need to call `accept()` syscall to accept incoming connection. it will:
    * extract the first connection request in the queue of pending connections.
    * create a new socket that is connected to the socket that made the connection request.
    * return a new file descriptor referring to that socket.

    so the return will be another file descriptor.

* `accept()` has 3 arguments:
    * `sockfd`: the socket file descriptor, that we get previously from `socket()` syscall.
    * `addr`: the address to bind to. it is a pointer to `sockaddr` struct.
    * `addrlen`: the length of the address.

In summary, the steps to create a socket is:
* `open()`
* `socket()`
* `bind()`
* `listen()`
* `accept()`

from that socket returned by `accept()`, we can use `read()` and `write()` syscall to read and write data to the socket.

* lastly, http is just a protocol how we agree for that string sent in the socket looks like. for example, we can agree that the first line is the method, the second line is the path, etc. so we can parse the string sent in the socket to get the method, path, etc.

sample request:
```
GET / HTTP/1.1
Host: localhost:8080
```

sample response:
```
HTTP/1.1 200 OK
```


# Ideas to Explore in the Future

-
