import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CountdownTimerProps {
  targetDate: Date;
  message?: string;
  className?: string;
}

export function CountdownTimer({ targetDate, message = "Limited spots available", className = "" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`bg-gradient-to-r from-accent/10 to-sunset/10 border border-accent/20 rounded-lg p-6 ${className}`}
    >
      <div className="text-center">
        <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wide">
          {message}
        </p>
        
        <div className="flex justify-center gap-4">
          {[
            { value: timeLeft.days, label: 'Days' },
            { value: timeLeft.hours, label: 'Hours' },
            { value: timeLeft.minutes, label: 'Minutes' },
            { value: timeLeft.seconds, label: 'Seconds' }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white border-2 border-accent rounded-lg p-3 min-w-[60px]">
                <div className="text-2xl font-display font-bold text-accent">
                  {formatNumber(item.value)}
                </div>
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
        
        {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-red-600 font-semibold mt-4"
          >
            Offer has ended!
          </motion.p>
        ) : (
          <p className="text-xs text-muted-foreground mt-4">
            Book now to secure your spot
          </p>
        )}
      </div>
    </motion.div>
  );
}

// Pre-configured countdown for common use cases
export function LimitedSpotsCountdown() {
  // Set target to 7 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);
  
  return (
    <CountdownTimer
      targetDate={targetDate}
      message="Only 3 spots left for next month!"
      className="max-w-md mx-auto"
    />
  );
}

export function EarlyBirdCountdown() {
  // Set target to 14 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 14);
  
  return (
    <CountdownTimer
      targetDate={targetDate}
      message="Early bird pricing ends in:"
      className="max-w-md mx-auto"
    />
  );
}
