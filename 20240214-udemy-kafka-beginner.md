---
date: 2024-02-14
topic: udemy - learn apache kafka for beginners v3
tags: technical, udemy, kafka
---

# Brief

Continuation from [20240213-udemy-kafka-beginner.md](20240213-udemy-kafka-beginner.md)

# What I Learned

* Today I learned how to setup kafka, either on local or using cluod solution like conduktor. The lecturer heavily promotes conduktor and it seems very easy to use. Unfortunately, I'm watching from mobile and I can't try it out now.

* We can configure how the message is delivered to kafka using `acks` configuration. There are 3 options:
  * `acks=0` - producer won't wait for ack from broker. This is the fastest but least reliable.
  * `acks=1` - producer will wait for ack from leader of the partition. This is the default.
  * `acks=all` - producer will wait for ack from all replicas. This is the slowest but most reliable.

* Kafka community is moving away from `zookeeper` and moving to `kRaft` for managing metadata. This is a good news because `zookeeper` is known to be complex and hard to manage. Starting from kafka 3.3.1, `kRaft` is production ready, and it is the recommended way.

# Ideas to Explore in the Future

Try to setup kafka using conduktor. 

Conduktor has a great tutorial site as well, will check it out sometime later after I finished current course. Link: https://www.conduktor.io/kafka/what-is-apache-kafka/
