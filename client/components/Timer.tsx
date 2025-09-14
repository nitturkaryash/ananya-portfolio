import React, { useState, useEffect } from 'react';

interface TimerProps {
  className?: string;
}

export function Timer({ className = "" }: TimerProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className={`text-[#5A5757] text-lg font-semibold ${className}`}>
      {formatTime(time)} ET
    </div>
  );
}
