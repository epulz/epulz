import { useEffect, useState } from "react";
import "./ComingSoonPage.css";

function ComingSoonPage() {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {
    const countDownDate = new Date("Feb 28, 2024 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(days.toString().padStart(2, "0"));
      setHours(hours.toString().padStart(2, "0"));
      setMinutes(minutes.toString().padStart(2, "0"));
      setSeconds(seconds.toString().padStart(2, "0"));

      if (distance < 0) {
        clearInterval(interval);
        setDays("00");
        setHours("00");
        setMinutes("00");
        setSeconds("00");
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="main">
      <div className="container" data-tilt>
        <p className="animate-character" data-text="COMING SOON!">
          <span>COMING SOON!</span>
        </p>
        <div className="launchTime">
          <div>
            <div id="inner">
              <p id="days">{days}</p>
              <span>Days</span>
            </div>
          </div>
          <div>
            <div id="inner">
              <p id="hours">{hours}</p>
              <span>Hours</span>
            </div>
          </div>
          <div>
            <div id="inner">
              <p id="minutes">{minutes}</p>
              <span>Minutes</span>
            </div>
          </div>
          <div>
            <div id="inner">
              <p id="seconds">{seconds}</p>
              <span>Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ComingSoonPage };
