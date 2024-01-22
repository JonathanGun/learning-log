"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Robot from "@/util/robot";

const URL = "ws://localhost:8080";
const EMPTY_IMAGE =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";

export default function Home() {
  const [image, setImage] = useState(EMPTY_IMAGE);
  const [humidity, setHumidity] = useState(NaN);
  const [isCameraEnabled, setIsCameraEnabled] = useState(false);
  const [robot, setRobot] = useState<Robot>();

  useEffect(() => {
    setRobot(new Robot(URL, setImage, setHumidity));

    return () => {
      robot?.close();
      setImage(EMPTY_IMAGE);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center">
          ESP32-CAM React Websocket
        </h1>
        <Image
          src={image}
          width={640}
          height={480}
          alt="ESP32-CAM video stream"
        />
        <div className="flex flex-row items-center justify-center space-x-4 p-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              if (isCameraEnabled) {
                robot?.stopCamera();
                setImage(EMPTY_IMAGE);
              } else {
                robot?.startCamera();
              }
              setIsCameraEnabled(!isCameraEnabled);
            }}
          >
            {isCameraEnabled ? "Stop" : "Start"} Camera
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              robot?.moveServo();
            }}
          >
            Move Servo
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              robot?.checkHumidity();
            }}
          >
            Check Humidity
          </button>
        </div>
        <p>Humidity value is {humidity}%</p>
      </div>
    </main>
  );
}
