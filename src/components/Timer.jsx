// components/Timer.js
import { useState, useEffect } from "react";

export default function Timer() {
  const [currentTime, setCurrentTime] = useState(
    new Date()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className=" text-white py-3 px-10 rounded text-3xl flex justify-center items-center font-bold">
      {currentTime.toLocaleTimeString()}
    </div>
  );
}
