import {
	PayloadAction,
	SerializedError,
	createAsyncThunk,
	createSlice,
} from '@reduxjs/toolkit';

import { api } from '../../lib/axios';
import { RelatorioTS } from '../../types/Relatorio';

type CredentialsTS = {
	token: string | null;
	id?: FormData;
	status?: string;
	ocorrenciaId?: number;
	body?: RelatorioTS;
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
		gravidade: 0,
		relatorio: '',
		encaminhamento: '',
		memorando: '',
		oficio: '',
		processo: '',
		assunto: '',
		observacoes: '',
		areaAfetada: 0,
		tipoConstrucao: 0,
		tipoTalude: 0,
		vegetacao: 0,
		danosMateriais: false,
		dataGeracao: undefined,
		dataAtendimento: undefined,
		fotos: [
			{
				url: '',
			},
		],
		animais: {
			caes: 0,
			gatos: 0,
			aves: 0,
			equinos: 0,
		},
		interdicao: 0,
		situacaoVitimas: 0,
		dadosVistoria: {
			desmoronamento: false,
			deslizamento: false,
			esgoto_escoamento: false,
			erosao: false,
			inundacao: false,
			incendio: false,
			arvores: false,
			infiltracao_trinca: false,
			judicial: false,
			monitoramento: false,
			transito: false,
		},
		ocorrencia_id: 0,
		casa_id: 0,
	},
	relatorios: [],
	loading: false,
	error: null,
};

export const fetchRelatorios = createAsyncThunk(
	'relatorios/ver',
	async ({ token }: CredentialsTS, thunkAPI) => {
		try {
			const response = await api.get('relatorios/ver', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			return response.data;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.response?.data || error.message);
		}
	}
);

export const createRelatorio = createAsyncThunk(
	'relatorios/criar',
	async ({ token, body }: CredentialsTS, thunkAPI) => {
		try {
			const response = await api.post(`relatorios/criar/`, body, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			return response.data;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.response?.data || error.message);
		}
	}
);

export const fetchOneRelatorio = createAsyncThunk(
	'relatorios/ver/{id}',
	async ({ id, token }: CredentialsTS, thunkAPI) => {
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
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.response?.data || error.message);
		}
	}
);

export const fetchFilterRelatorio = createAsyncThunk(
	'relatorios/filtrar/{status}',
	async ({ status, token }: CredentialsTS, thunkAPI) => {
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
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.response?.data || error.message);
		}
	}
);

export const slice = createSlice({
	name: 'relatorio',
	initialState,
	reducers: {
		setCasaId: (state, action) => {
			const casaId = action.payload;
			state.relatorio.casa_id = casaId;
		},
	},
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
			.addCase(createRelatorio.pending, (state) => {
				state.error = null;
				state.loading = true;
			})
			.addCase(createRelatorio.fulfilled, (state) => {
				state.error = null;
				state.loading = false;
			})
			.addCase(createRelatorio.rejected, (state, action) => {
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

export const { setCasaId } = slice.actions;
export default slice.reducer;
