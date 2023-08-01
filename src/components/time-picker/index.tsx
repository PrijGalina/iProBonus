import { FC, useEffect, useState } from 'react';

export const TimerPicker: FC = (): JSX.Element => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      if(currentTime.getMinutes() !== new Date().getMinutes()){
        setCurrentTime(new Date())
        clearInterval(timer);
      }
    }
    )
  }, [currentTime])

  return (
    <div>
      {currentTime.toLocaleTimeString("en-US", {hour: "2-digit", minute: "2-digit"})}
    </div>
  )
}