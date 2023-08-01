import { FC } from 'react';
import { Battery } from '../../components/battery';
import { TimerPicker } from '../../components/time-picker';
import classes from './index.module.css';

export const MobileHeader: FC  = (): JSX.Element =>  {
  const activeClasses = [classes.indicator__item, classes.active].join(' ');
  
  return (
   <header className={classes.container}>
      <div className={classes.indicator}>
        <ul className={classes.indicator__list}>
          <li className={activeClasses}>1</li>
          <li className={activeClasses}>2</li>
          <li className={activeClasses}>3</li>
          <li className={classes.indicator__item}>4</li>
          <li className={classes.indicator__item}>5</li>
        </ul>
        <span className={classes.indicator__text}>Figma</span>
      </div>
      <TimerPicker/>
      <Battery/>
   </header>
  )
}