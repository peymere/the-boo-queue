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
        <div>
      <h6>Countdown to Halloween</h6>
      <p>{countdown.days} days {countdown.hours} hours {countdown.minutes} minutes {countdown.seconds} seconds</p>
    </div>
    );
};

export default HalloweenCountdown;