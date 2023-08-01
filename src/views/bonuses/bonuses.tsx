import React, { FC, useEffect } from 'react';
import { BonusCard } from '../../components/bonus-card';
import { useGetBonusesMutation } from '../../api/bonuses';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { setBurningQuantity, setCurrentQuantity, setDateBurning } from '../../store/bonuses';

export const Bonuses: FC = () => {
  let [getBonuses, { data }] = useGetBonusesMutation();
  let dispatch = useAppDispatch();

  async function loadDataFromServer() {
    try {
      await getBonuses(null);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadDataFromServer();
  }, []);

  useEffect(() => {
    if (data) {
      dispatch(setCurrentQuantity(data.data.currentQuantity));
      dispatch(setDateBurning(data.data.dateBurning));
      dispatch(setBurningQuantity(data.data.forBurningQuantity));
    }
  }, [data]);

  return (
    <BonusCard/>
  )
}

