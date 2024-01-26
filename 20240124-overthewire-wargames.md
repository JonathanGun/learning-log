---
date: 2024-01-24
topic: Over The Wire Wargames - Bandit
tags: security, technical, wargames
---

# Brief

I continued completing `bandit` levels from Over The Wire Wargames.

# What I Learned

* we can see details about a private key using `openssl pkey -in sshkey.private -text -noout` command. It will show the number of bits, modulus, public and private exponent, prime1, prime2, exponent1, exponent2, and coefficient.
* heartbleed is a security bug in OpenSSL. It allows attackers to read the memory of the systems. The bug happened because it allocates memory buffer and allow attacker to read that buffer. Read more:
    * https://en.wikipedia.org/wiki/Heartbleed
    * https://www.csoonline.com/article/562859/the-heartbleed-bug-how-a-flaw-in-openssl-caused-a-security-crisis.html
    * https://cve.mitre.org/cgi-bin/cvename.cgi?name=cve-2014-0160
* To connect with server using SSL, you can use `openssl s_client -connect <host>:<port>`. For example, `openssl s_client -connect localhost:443`.

Today I've finished until Level 19.

# Ideas to Explore in the Future

* creating TLS server
* create a CSR (Certificate Signing Request) using openssl (https://www.feistyduck.com/library/openssl-cookbook/online/)
