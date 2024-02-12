---
date: 2024-02-12
topic: pwnable.kr - toddler bottle
tags: ctf, pwnable.kr, wargames, technical
---

# Brief

Following [this youtube playlist](https://www.youtube.com/watch?v=qGt-0OOAFcM&list=PLK06XT3hFPziMAZj8QuoqC8iVaEbrlZWh), I jumped into [the website](https://pwnable.kr/play.php) and start doing some wargames.

# What I Learned

Initially I tried the bufferoverflow challenge by `print`-ing the bytes and piping it through netcat command, but it doesn't work.

Using `pwn` library in python, I'm able to connect to remote host and send the bytes directly. Using the same exact bytes, I'm able to access the shell. Until this time, I don't now why sending manually through netcat doesn't work.

# Ideas to Explore in the Future

Looks like the challenges here is bit tougher than the `pwn.college` or `overthewire` website. I might need to learn some basic first if I wanted to jump into harder levels.
