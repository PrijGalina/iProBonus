import { createSlice } from '@reduxjs/toolkit';
// store
import type { RootState } from '../index';

interface IBonusesState {
  current: number;
  date: string;
  burning: number;
}

const initialState:IBonusesState = {
  current: 300,
  date: '2023-03-29T18:18:00',
  burning: 250,
};

export const bonusesSlice = createSlice({
  name: 'bonuses',
  initialState,
  reducers: {
    setCurrentQuantity: (state, actions) => {
      state.current = actions.payload;
    },
    setDateBurning: (state, actions) => {
      state.date = actions.payload;
    },
    setBurningQuantity: (state, actions) => {
      state.burning = actions.payload;
    },
  },
});

export const { setCurrentQuantity, setDateBurning, setBurningQuantity } = bonusesSlice.actions;
export const getCurrentQuantity = (state: RootState) => state.bonuses.current;
export const getDateBurning = (state: RootState) => state.bonuses.date;
export const getBurningQuantity = (state: RootState) => state.bonuses.burning;

export default bonusesSlice.reducer;
