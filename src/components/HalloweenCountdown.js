import React, {useState, useEffect} from "react";

const calculateTimeRemaining = () => {
    const currentDate = new Date();
    const halloweenDate = new Date(currentDate.getFullYear(), 9, 31);
    if (currentDate > halloweenDate) {
      halloweenDate.setFullYear(halloweenDate.getFullYear() + 1);
    }
    const timeRemaining = halloweenDate - currentDate;
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

function HalloweenCountdown() {
    const [countdown, setCountdown] = useState(calculateTimeRemaining());

    useEffect(() => {
      const interval = setInterval(() => {
        setCountdown(calculateTimeRemaining());
      }, 1000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="countdown-container">
        <h3 className="countdown-title">Countdown to Halloween:</h3>
        <div className="clock-container">
          <div className="components-container">
            <div className="days-container">
              <div className="triangle"></div>
              <div className="days">{countdown.days}</div>
              <div className="days-label">Days</div>
            </div>
            <div class="hours-container">
              <div class="hours">{countdown.hours}</div>
              <div class="hours-label">Hours</div>
            </div>
            <div class="minutes-container">
              <div class="minutes">{countdown.minutes}</div>
              <div class="minutes-label">Minutes</div>
            </div>
            <div class="seconds-container">
              <div class="seconds">{countdown.seconds}</div>
              <div class="seconds-label">Seconds</div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HalloweenCountdown;