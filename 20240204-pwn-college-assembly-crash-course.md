---
date: 2024-02-04
topic: pwn.college - assembly crash course
tags: technical, pwn.college, linux, networking
---

# Brief

In [pwn.college](https://pwn.college/), I'm currently learning about [assembly](https://pwn.college/fundamentals/assembly-crash-course).

# What I Learned

Most content here I already knew, but I learned about the following:
* In intel amd64 syntax, when you mov 32 bit to 64 bit register, the upper 32 bits are zeroed out.
* You can do simple comparison using xor, and, and or operations.
* What I learned in the past is AT&T syntax, which is quite different with current intel syntax. For example, when calling a function, in AT&T syntax the param is stored in the stack, while in intel syntax the param is stored in the register. The register is also predefined, first param is stored in rdi, second in rsi, and so on. Both uses rax to store the return value.

I completed all 30 levels in a single day

# Ideas to Explore in the Future
