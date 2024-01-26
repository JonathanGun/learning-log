---
date: 2024-01-25
topic: Over The Wire Wargames - Bandit
tags: security, technical, wargames
---

# Brief

I continued completing `bandit` levels from Over The Wire Wargames.

# What I Learned

* we can use `setuid` to execute a program with the permission of the owner of the program. For example, if we have a program owned by `root` and has `setuid` permission, then we can execute the program with `root` permission.
* I can use `nc` (netcat) command to open a TCP and UDP connection.
* There are 8 sections on the manual page of linux command:
    ```
    MANUAL SECTIONS
    The standard sections of the manual include:

    1      User Commands
    2      System Calls
    3      C Library Functions
    4      Devices and Special Files
    5      File Formats and Conventions
    6      Games et. al.
    7      Miscellanea
    8      System Administration tools and Daemons
    ```

    You can access the specific section using `man <section> <command>`. For example, `man 5 passwd` will show the manual page of `passwd` command in section 5.

Today I finished until level 23.

# Ideas to Explore in the Future
