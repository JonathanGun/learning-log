---
date: 2024-01-30
topic: pwn.college - building a web server
tags: technical, pwn.college, low-level, linux, syscall
---

# Brief

In [pwn.college](https://pwn.college/), I'm currently learning about [building a web server](https://pwn.college/program-security/building-a-web-server), but in the context of low level processes. It covers from linux process, syscall, http, and multiprocessing.

# What I Learned

* we can use memory stack for storing variable, in assembly

```asm
push 3
pop rax     # rax will now contain value 3
```

* we can set a register to NULL in assembly by setting the value to be zero (it will not be treated as address, but it is reserved for null pointer)


# Ideas to Explore in the Future

-
