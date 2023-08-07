import { configureStore } from '@reduxjs/toolkit';

import userReducer from './reducers/userReducer';
import ocorrenciaReducer from './reducers/ocorrenciaReducer';
import relatorioReducer from './reducers/relatorioReducer';
import themeReducer from './reducers/themeReducer';

export const store = configureStore({
	reducer: {
		user: userReducer,
		ocorrencia: ocorrenciaReducer,
		relatorio: relatorioReducer,
		theme: themeReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
