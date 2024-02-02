---
date: 2024-02-02
topic: pwn.college - intercepting communication
tags: technical, pwn.college, linux, networking
---

# Brief

In [pwn.college](https://pwn.college/), I'm currently learning about [intercepting communication](https://pwn.college/intro-to-cybersecurity/intercepting-communication).

# What I Learned

* I can scan open ports using `nmap` command
* when scanning on large number of hosts, I need to specify some parameter to skip the DNS resolution, to speed up the process using `nmap -n`. I can add `-Pn` to skip the host discovery. To speed up more, I can use `-T5` and `--min-parallism 1000` to increase the number of parallelism. I got a warning for setting this value too high, but it only took 20 seconds in total, which otherwise it might need several minutes.

```bash
Warning: Your --min-parallelism option is pretty high!  This can hurt reliability.
```

* I learn about network interface. I can use `ifconfig` to see the network interface. Network interface separates the network traffic, for example:
  * I can have a network interface for my local network
  * I can have a network interface for my private network
  * I can have a network interface for public network
* If I bind an application to a network interface, it will only listen to the traffic from that network interface. I can use `netstat -tuln` to see the application that is listening to the network interface.
* You can send ethernet packet easily using `scapy` library in python. ref: https://superuser.com/questions/1427951/sending-packet-with-scapy-custom-ethernet-header

```python
# use ff:ff:ff:ff:ff:ff as destination to send to all devices in the network (broadcast)
x = Ether(src='aa:bb:cc:dd:ee:ff',dst='ff:ff:ff:ff:ff:ff',type=0xffff)
print(sendp(x, iface='eth0'))
```

* You can also craft other packet, for example, ARP packet, IP packet, TCP packet, etc. Then, you can send the packet to the network interface using `sendp` function.

* To stack the packet, you can use `x / y` to stack packet `y` on top of packet `x`. For example, to stack IP packet on top of Ethernet packet, you can use `x / y` where `x` is Ethernet packet and `y` is IP packet.

```python
x = Ether(src='aa:bb:cc:dd:ee:ff',dst='ff:ff:ff:ff:ff:ff')
y = IP(src='10.0.0.1',dst='10.0.0.2',ttl=64)
z = TCP(sport=12345,dport=80,flags='S',seq=12345)
print(ls(x / y / z))
sendp(x / y / z, iface='eth0')
```

* To receive response from the packet, you can use `srp` function. It will "send and receive" the packet.

```python
x = Ether(src='aa:bb:cc:dd:ee:ff',dst='ff:ff:ff:ff:ff:ff')
y = IP(src='10.0.0.1',dst='10.0.0.2',ttl=64)
z = TCP(sport=12345,dport=80,flags='S',seq=12345)
print(ls(x / y / z))
ans, unans = srp(x / y / z, iface='eth0')
print(ans.summary())
```

# Ideas to Explore in the Future
