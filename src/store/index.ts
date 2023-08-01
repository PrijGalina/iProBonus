import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { api } from '../api';
import bonusesReducer from './bonuses';


export enum NameSpace {
  bonuses = 'bonuses',
}

const rootReducer = combineReducers({
  [NameSpace.bonuses]: bonusesReducer,

  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);