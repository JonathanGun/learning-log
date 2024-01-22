# Dummy Arduino Server

This dummy server is able to serve random "video" image with 1 second interval via websocket.

## How to Use

1. Start server using

```bash
npm start
```

2. Connect to websocket `ws://localhost:8080/`

3. Send message to start streaming camera data

```json
"startCamera"
```

4. To stop streaming camera data, send message

```json
"stopCamera"
```

## Other Features

1. Receive other command, such as `moveServo`. It will give response `ok`

```json
"moveServo"
```

2. Retrieve value from other sensor (e.g. humidity sensor) using command `humidity`

```json
"humidity"
```
