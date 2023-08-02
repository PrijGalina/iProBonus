import { FC } from 'react';
import classes from './index.module.css';
import { ReactComponent as Logotype } from '../../assets/img/logo.svg';
import { ReactComponent as InformationButton } from "../../assets/img/information-button.svg";

export const Header: FC  = (): JSX.Element =>  {
  return (
   <header className={classes.container}>
      <Logotype/>
      <InformationButton/> 
   </header>
  )
}