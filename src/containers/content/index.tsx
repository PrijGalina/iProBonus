import classes from './index.module.css';
import {FC, PropsWithChildren} from 'react';



export const Content:FC<PropsWithChildren> = ({children}): JSX.Element => {
  return (
    <main className={classes.container}>
      {children}
    </main>
  );
}