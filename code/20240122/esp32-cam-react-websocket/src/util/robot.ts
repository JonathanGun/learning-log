type Message = {
  type: string;
  data: string;
};

class Robot {
  private ws: WebSocket;
  private videoStreamCallback: (data: string) => void;

  constructor(
    private url: string,
    videoStreamCallback: (data: string) => void,
    humidityDataCallback: (data: number) => void
  ) {
    console.log("Connection to robot initiated");
    this.ws = new WebSocket(url);

    this.ws.onopen = () => {
      console.log("Connection to robot opened");
    };

    this.ws.onclose = () => {
      console.log("Connection to robot closed");
    };

    this.ws.onmessage = (event: MessageEvent) => {
      var message: Message = JSON.parse(event.data);
      console.log("received message", message);
      if (message.type === "video") {
        this.videoStreamCallback(`data:image/png;base64,${message.data}`);
      } else if (message.type === "humidity") {
        const humidity = Number(message.data);
        if (humidity) {
          humidityDataCallback(humidity);
        }
      }
    };

    this.videoStreamCallback = videoStreamCallback;
  }

  send(message: string) {
    this.ws.send(message);
  }

  startCamera() {
    console.log("startCamera");
    this.ws.send("startCamera");
  }

  stopCamera() {
    console.log("stopCamera");
    this.ws.send("stopCamera");
  }

  moveServo() {
    console.log("moveServo");
    this.ws.send("moveServo");
  }

  checkHumidity() {
    console.log("checkHumidity");
    this.ws.send("humidity");
  }

  close() {
    console.log("closing connection");
    this.ws.close();
  }
}

export default Robot;
