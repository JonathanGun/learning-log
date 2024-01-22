import { WebSocketServer } from "ws";
import randomImg from "./imagegen";

const wss = new WebSocketServer({ port: 8080 });

console.log("dummy server started");

wss.on("connection", function connection(ws) {
  function send(type: string, data: string) {
    var message = {
      type: type,
      data: data,
    };
    ws.send(JSON.stringify(message));
  }

  console.log("new connection");

  let isCameraEnabled = false;

  ws.on("error", console.error);

  ws.on("message", function message(rawData) {
    console.log("received: %s", rawData);
    var data = rawData.toString();
    if (data === "startCamera") {
      isCameraEnabled = true;
    } else if (data === "stopCamera") {
      isCameraEnabled = false;
    } else if (data === "moveServo") {
      send("moveServo", "ok");
    } else if (data === "humidity") {
      // trim to 2 decimal places
      send("humidity", String(Math.random() * 100).slice(0, 5));
    }
  });

  setInterval(() => {
    if (!isCameraEnabled) return;
    console.log("sending dummy image");
    send("video", randomImg());
  }, 1000);
});
