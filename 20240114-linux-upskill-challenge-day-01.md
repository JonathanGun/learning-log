---
date: 2024-01-14
topic: Linux Upskill Challenge Day 1
tags: Technical, Linux, KVM
---

# Brief

Starting from today, I took the [Linux Upskill Challenge](https://linuxupskillchallenge.org/) as part of [sadserver](https://sadservers.com/newserver/luc) scenario. This challenge is designed to be completed in around a month with 1 hour commitment each day.

# What I Learned

I learned new commands on linux:
* lscpu - show info about cpu
    * num of core
    * num of thread
    * and lot of things that I don't have any idea what it is about

About caches:
* l1d stands for level 1 data cache
* l1i stands for level 1 instruction cache

About KVM:
* https://www.youtube.com/playlist?list=PLLsor6GJ_BEEucicHgBjtYurGv7judmrw
    * hypervisor type 1 is giving direct access to cpu (bare metal)
    * hypervisor type 2 is running on top of OS as a process (virtualbox, vmware)

About SELinux:
* https://www.youtube.com/watch?v=_WOKRaM-HI4
    * it is a security module on top of linux kernel
    * it gives all of the resources (file, network, process, etc) a label
    * then it defines policy whether user can access the resource or not

# Ideas to Explore in the Future

here is output from lscpu that I still don't understand

Address sizes:                      48 bits physical, 48 bits virtual
NUMA node(s):                       1
Vendor ID:                          AuthenticAMD
BogoMIPS:                           4399.80
Virtualization type:                full
Vulnerability Gather data sampling: Not affected
Vulnerability Itlb multihit:        Not affected
Vulnerability L1tf:                 Not affected
Vulnerability Mds:                  Not affected
Vulnerability Meltdown:             Not affected
Vulnerability Mmio stale data:      Not affected
Vulnerability Retbleed:             Mitigation; untrained return thunk; SMT vulnerable
Vulnerability Spec rstack overflow: Mitigation; safe RET, no microcode
Vulnerability Spec store bypass:    Vulnerable
Vulnerability Spectre v1:           Mitigation; usercopy/swapgs barriers and __user pointer sanitization
Vulnerability Spectre v2:           Mitigation; Retpolines, STIBP disabled, RSB filling, PBRSB-eIBRS Not affected
Vulnerability Srbds:                Not affected
Vulnerability Tsx async abort:      Not affected
Flags:                              fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxs
                                    r_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl nonstop_tsc cpuid extd_apicid tsc_known_freq pni pclmulqdq ssse3 fma cx
                                    16 sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy cr8_legacy abm sse4a misalignsse 3dn
                                    owprefetch topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 rdseed adx smap clflushopt sha_ni xsaveopt xsavec xgetbv1 clzero x
                                    saveerptr arat npt nrip_save
