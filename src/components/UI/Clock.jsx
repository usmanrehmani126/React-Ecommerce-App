import React, { useEffect, useState } from "react";

const Clock = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  let interval;
  const countDown = () => {
    const destination = new Date("March 30,2023").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = destination - now;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    });
  };
useEffect( ()=>{
    countDown();
})
  // };

  return (
    <div className="clock_wrapper  d-flex align-items-center gap-3 py-2 justify-content-center">
      <div className="clock_data d-flex align-items-center gap-1 md:gap-4 py-3">
        <div className="text-white text-center">
          <h1 className="fs-6 md:fs-3">{days}</h1>
          <h6 className="fs-6">Days</h6>
        </div>
        <span className="fs-6 md:fs-3 text-white">:</span>
      </div>
      <div className="clock_data d-flex align-items-center gap-1 md:gap-4 py-3">
        <div className="text-white text-center">
          <h1 className="fs-6 md:fs-3">{hours}</h1>
          <h6 className="fs-6">Hours</h6>
        </div>
        <span className="fs-6 md:fs-3 text-white">:</span>
      </div>
      <div className="clock_data d-flex align-items-center gap-1 md:gap-4 py-3">
        <div className="text-white text-center">
          <h1 className="fs-6 md:fs-3">{minutes}</h1>
          <h6 className="fs-6">Minutes</h6>
        </div>
        <span className="fs-6 md:fs-3 text-white">:</span>
      </div>
      <div className="clock_data d-flex align-items-center gap-1 md:gap-4 py-3">
        <div className="text-white text-center">
          <h1 className="fs-6 md:fs-3">{seconds}</h1>
          <h6 className="fs-6">Seconds</h6>
        </div>
      </div>
    </div>
  );
};

export default Clock;
