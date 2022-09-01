import { useEffect, useState } from "react";

function Timer(data) {
  const [day, setDay] = useState("Saturday");
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const sub = data.subject;
  const target = new Date(data.date);
  var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday']
  const dayName = week[target.getDay()];
  const d = target.getDate();
  const m = target.getMonth() + 1;
  const y = target.getFullYear();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setDays("O");
        setHours("V");
        setMinutes("E");
        setSeconds("R");
      }
      if (!d && !h && !m && !s) {
        setDays("Check");
        setHours("Your");
        setMinutes("RC");
        setSeconds("Website");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <>
        <div className="timer-wrapper">
          <span>{sub} Exam Countdown for July 2022 Exam - </span>
          <div className="timer-inner">
            <div className="timer-segment">
              <span className="time">{days}</span>
              <span className="label">Days</span>
            </div>
            <span className="divider">:</span>
            <div className="timer-segment">
              <span className="time">{hours}</span>
              <span className="label">Hours</span>
            </div>
            <span className="divider">:</span>
            <div className="timer-segment">
              <span className="time">{minutes}</span>
              <span className="label">Minutes</span>
            </div>
            <span className="divider">:</span>
            <div className="timer-segment">
              <span className="time">{seconds}</span>
              <span className="label">Seconds</span>
            </div>
          </div>
          <span>{dayName + ", " + d + "/" + m + "/" + y}</span>
        </div>
      </>
    </div>
  );
}

export default Timer;
