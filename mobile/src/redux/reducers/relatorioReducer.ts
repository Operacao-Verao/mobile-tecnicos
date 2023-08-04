import {
	PayloadAction,
	SerializedError,
	createAsyncThunk,
	createSlice,
} from '@reduxjs/toolkit';

import { api } from '../../lib/axios';
import { RelatorioTS } from '../../types/Relatorio';

type CredentialsTS = {
	token: string;
	id?: FormData;
	status?: string;
};

type State = {
	relatorio: RelatorioTS;
	relatorios: RelatorioTS[];
	loading: boolean;
	error: SerializedError | null;
};

const initialState: State = {
	relatorio: {
		afetados: {
			adultos: 0,
			criancas: 0,
			idosos: 0,
			especiais: 0,
			mortos: 0,
			feridos: 0,
			enfermos: 0,
		},
		enfermos: 0,
		gravidade: null,
		relatorio: '',
		encaminhamento: '',
		memorando: '',
		oficio: '',
		processo: '',
		assunto: '',
		observacoes: '',
		areaAfetada: null,
		tipoConstrucao: null,
		tipoTalude: null,
		vegetacao: null,
		danosMateriais: false,
		dataGeracao: null,
		dataAtendimento: null,
		animais: {
			caes: 0,
			gatos: 0,
			aves: 0,
			equinos: 0,
		},
	},
	relatorios: [],
	loading: false,
	error: null,
};

export const fetchRelatorios = createAsyncThunk(
	'relatorios/ver',
	async ({ token }: CredentialsTS) => {
		try {
			const response = await api.get('relatorios/ver', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			if (response.status === 200) {
				let relatorios = response.data;
				return relatorios;
			}
		} catch (error) {
			return 'Erro: ' + error;
		}
	}
);

export const fetchOneRelatorio = createAsyncThunk(
	'relatorios/ver/{id}',
	async ({ id, token }: CredentialsTS) => {
		try {
			const response = await api.get(`relatorios/ver/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			if (response.status === 200) {
				let relatorio = response.data;
				return relatorio;
			}
		} catch (error) {
			return 'Erro: ' + error;
		}
	}
);

export const fetchFilterRelatorio = createAsyncThunk(
	'relatorios/filtrar/{status}',
	async ({ status, token }: CredentialsTS) => {
		try {
			const response = await api.get(`relatorios/ver/${status}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			if (response.status === 200) {
				let relatorios = response.data;
				return relatorios;
			}
		} catch (error) {
			return 'Erro: ' + error;
		}
	}
);

export const slice = createSlice({
	name: 'relatorio',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchRelatorios.pending, (state) => {
				state.error = null;
				state.loading = true;
			})
			.addCase(
				fetchRelatorios.fulfilled,
				(state, action: PayloadAction<RelatorioTS[]>) => {
					state.error = null;
					state.loading = false;
					state.relatorios = action.payload;
				}
			)
			.addCase(fetchRelatorios.rejected, (state, action) => {
				state.error = action.error;
				state.loading = false;
			})
			.addCase(fetchOneRelatorio.pending, (state) => {
				state.error = null;
				state.loading = true;
			})
			.addCase(
				fetchOneRelatorio.fulfilled,
				(state, action: PayloadAction<RelatorioTS>) => {
					state.error = null;
					state.loading = false;
					state.relatorio = action.payload;
				}
			)
			.addCase(fetchOneRelatorio.rejected, (state, action) => {
				state.error = action.error;
				state.loading = false;
			})
			.addCase(fetchFilterRelatorio.pending, (state) => {
				state.error = null;
				state.loading = true;
			})
			.addCase(
				fetchFilterRelatorio.fulfilled,
				(state, action: PayloadAction<RelatorioTS[]>) => {
					state.error = null;
					state.loading = false;
					state.relatorios = action.payload;
				}
			)
			.addCase(fetchFilterRelatorio.rejected, (state, action) => {
				state.error = action.error;
				state.loading = false;
			});
	},
});

export default slice.reducer;
