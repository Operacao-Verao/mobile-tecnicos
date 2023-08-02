import { configureStore } from '@reduxjs/toolkit';

import responsibleReducer from './reducers/responsibleReducer';

export const store = configureStore({
  reducer: {
    responsible: responsibleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
