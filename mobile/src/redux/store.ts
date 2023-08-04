import { configureStore } from '@reduxjs/toolkit';

import userReducer from './reducers/userReducer';
import ocorrenciaReducer from './reducers/ocorrenciaReducer';
import relatorioReducer from './reducers/relatorioReducer';

export const store = configureStore({
	reducer: {
		user: userReducer,
		ocorrencia: ocorrenciaReducer,
		relatorio: relatorioReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
