---
date: 2024-02-06
topic: pwn.college - reverse engineering
tags: technical, pwn.college, linux, reverse-engineering
---

# Brief

In [pwn.college](https://pwn.college/), I'm currently learning about [reverse engineering](https://pwn.college/cse365-s2023/reverse-engineering). Looks like the module mostly taught about how to use `gdb` to reverse engineer a binary.

# What I Learned

I found another cool wargame website named [pwnable.kr](https://pwnable.kr/).

I completed the debugging refresher set of challenges today, it teaches about the basic of `gdb` like:
* You can set a breakpoint from your code, then run the program with `gdb` and it will stop at the breakpoint.
* You can use `n` to step over, `s` to step into, and `c` to continue.
* To show the value of current register, you can use `info registers`.
* You can examine the contents of memory using the `x/<n><u><f> <address>` parameterized command. In this format `<n>` is the number of elements to display, `<u>` is the unit size to display, and `<f>` is the format to display it in.
* For example, `x/8i $rip` will print the next 8 instructions from the current instruction pointer. `x/8x $rsp` will print the next 8 64-bit values from the current stack pointer.

* You can step through the program using `si` and `ni` to step into and over instructions, respectively.
* While stepping over instructions, you can always show some values after stepping using `display/<n><u><f> <address>`. This will show the value of the address every time you step through the program. 
* For example, `display/8i $rip` will display the next 8 instructions from the current instruction pointer every time you step through the program. `display/1g $rax` will display the value of the `rax` register every time you step through the program.

* You can set the asm syntax to intel using the command `set disassembly-flavor intel`.
```bash
set disassembly-flavor intel
```

# Ideas to Explore in the Future
