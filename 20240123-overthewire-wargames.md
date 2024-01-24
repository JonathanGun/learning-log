---
date: 2024-01-23
topic: Over The Wire Wargames - Bandit
tags: security, technical, wargames
---

# Brief

I stumbled upon this website called [Over The Wire](https://overthewire.org/wargames/).

> The wargames offered by the OverTheWire community can help you to learn and practice security concepts in the form of fun-filled games.

As suggested, today I'll start with the first section, `Bandit`.

# What I Learned

* Using `cal` command, I can see the calendar formatted for the current month.

```bash
> cal
    January 2024      
Su Mo Tu We Th Fr Sa  
    1  2  3  4  5  6  
 7  8  9 10 11 12 13  
14 15 16 17 18 19 20  
21 22 23 24 25 26 27  
28 29 30 31 
```

* I can get the file type of a file using `file` command.

```bash
> file readme
readme: ASCII text
```

* There are several special chars in linux, such as `-`. When it is used as a filename, we can't open it directly using `cat -`. Instead, we can use `cat ./-`. Read more: https://tldp.org/LDP/abs/html/special-chars.html

* You can pass specific criterias on the `find` command, such as:

    * `find -size 1033c` - find files with size 1033 bytes
    * `find ! -executable` - find files that are not executable
    * `find -readable` - find files that are readable
    * `find -user root` - find files owned by root
    * `find -group root` - find files owned by root group

* `| sort | uniq -c` - sort and count the number of occurences of each line

* You can use `strings` command to print only the printable characters of a file.

Today I've finished until Level 13.

# Ideas to Explore in the Future
