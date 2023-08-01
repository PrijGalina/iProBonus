import { FC } from 'react';
import classes from './index.module.css';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getCurrentQuantity, getDateBurning, getBurningQuantity } from '../../store/bonuses';

export const BonusCard: FC = (): JSX.Element =>  {
  let current_quantity = useAppSelector(getCurrentQuantity);
  let date_burning = new Date(useAppSelector(getDateBurning));
  let burning_quantity = useAppSelector(getBurningQuantity);

  return (
   <div className={classes.container}>
    <p className={classes.total}>{current_quantity}  бонусов</p>
    <div className={classes.countdown}>
      <span>{date_burning.getDate()}.{date_burning.getMonth()} сгорит</span>
      <img className={classes.icon} src="/fire.svg" alt="fire icon" width={13} height={17}/>
      <span>{burning_quantity} бонусов</span>
    </div>
   </div>
  )
}