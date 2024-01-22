---
date: 2024-01-22
topic: Communication between Arduino and Web app using Websocket and ESP32
tags: foo, bar
---

# Brief

I'm exploring arduino and ESP32 (I used ESP32-CAM). In this section, I'll try to stream the video output from ESP32-CAM to a web app using websocket.

# What I Learned

Browser has default websocket implementation. I can use it to connect to ESP32-CAM by using

```typescript
const url = "ws://localhost:8080/";
this.ws = new WebSocket(url);
```

to send a message, I can use

```typescript
this.ws.send(message);
```

then, we can set a callback to handle received message
```typescript
this.ws.onmessage = (event: MessageEvent) => {
    const message = event.data;
    console.log(message);
};
```

using this knowledge, I can create a simple web app with button and image placeholder to display the video stream from ESP32-CAM. I formatted the video stream as base64 string.

# Ideas to Explore in the Future

Using binary data instead of base64 string to reduce the size of data sent via websocket.
