// Countdown.jsx
import React, { useEffect, useState } from 'react';
import '../styles/CountDown.scss'

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(intervalId);
        setTimeLeft({ days: 0, hours: 0, minutes: 0});
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     

      setTimeLeft({ days, hours, minutes });
    }, 1000);

    return () => clearInterval(intervalId); // Limpieza al desmontar
  }, [targetDate]);

  return (
    <div className='CountDown'>
      <ul>
        <li><div>{timeLeft.days} </div> días</li>
        <li><div>{timeLeft.hours}</div> horas</li>
        <li><div>{timeLeft.minutes}</div> minutos</li>
      </ul>
    </div>              
  );
}

export default Countdown;
