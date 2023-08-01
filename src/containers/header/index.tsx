import { FC } from 'react';
import classes from './index.module.css';

export const Header: FC  = (): JSX.Element =>  {
  //TODO: размер логотипа передавать не напрямую, создать переменную с параметрами
  return (
   <header className={classes.container}>
      <img className={''} src="/logo.svg" alt="iProBonus Logotype" width={78} height={24}/>
      <img className={''} src="/information-button.svg" alt="information-button icon" width={24} height={24}/>
   </header>
  )
}