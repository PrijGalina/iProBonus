import { FC, useEffect, useState } from 'react';
import classes from './index.module.css';

export const Battery: FC = (): JSX.Element => {
  const [charge, setCharge] = useState<number>(44);
  const [width, setWidth] = useState<number>(charge * 20 / 100);

  useEffect(() => {
    setCharge(42);
    setWidth(charge * 20 / 100);
  }, [charge]);

  return (
    <div className={classes.container}>
      <span className={classes.value}>
        {charge}%
      </span>
      <svg width="25" height="11" viewBox="0 0 25 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M2.00246 1.02632C1.44721 1.02632 1 1.49554 1 2.07901V8.92099C1 9.50189 1.44906 9.97368 2.00246 9.97368H21.4975C22.0528 9.97368 22.5 9.50446 22.5 8.92099V2.07901C22.5 1.49811 22.0509 1.02632 21.4975 1.02632H2.00246ZM2.00246 0.5H21.4975C22.3266 0.5 23 1.20695 23 2.07901V8.92099C23 9.79682 22.3273 10.5 21.4975 10.5H2.00246C1.17338 10.5 0.5 9.79305 0.5 8.92099V2.07901C0.5 1.20318 1.17267 0.5 2.00246 0.5Z" fill="black"/>
        <rect width={width} height="7" fill="rgb(0,0,0)" y="2" x="1.5" />
        <path fillRule="evenodd" clipRule="evenodd" d="M25 5.73228C25 6.6139 24.3481 7.34325 23.5 7.46456V4C24.3481 4.12131 25 4.85066 25 5.73228Z" fill="black"/>
      </svg>
    </div>
  )
}