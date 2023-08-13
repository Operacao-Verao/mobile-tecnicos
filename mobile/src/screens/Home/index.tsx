// TODO: Usar a requisição do redux pra botar na tela as ocorrências

import { useEffect, useState } from 'react';
import { Ocorrencia } from '../../components/OcorrenciaComponent';
import Filter from '../../components/Filter';
import * as S from './styles';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/useApp';
import { fetchOcorrencias } from '../../redux/reducers/ocorrenciaReducer';
import { OcorrenciaTS } from '../../types/Ocorrencia';

const Home = () => {
	const dispatch = useAppDispatch();
	const user = useAppSelector((state) => state.user);
	const ocorrencia = useAppSelector((state) => state.ocorrencia.ocorrencias);
	const [ocorrencias, setOcorrencias] = useState<OcorrenciaTS[]>([]);
	const date = new Date();

	useEffect(() => {
		const getOcorrencias = () => {
			dispatch(fetchOcorrencias({ token: user.token }));
			setOcorrencias(ocorrencia);
			console.log(ocorrencias);
		};

		getOcorrencias();
	}, []);

	return (
		<S.Container>
			<S.Wrapper>
				<S.Title>Ocorrências Recentes</S.Title>
				<S.ViewFilter>
					<Filter />
				</S.ViewFilter>
				<Ocorrencia
					acionamento={'acionamento'}
					relato={
						'Enchente na vilinha com deslizamento em duas casas no mesmo número'
					}
					num_casas={3}
					status={'Em Aberto'}
					data={date}
				/>
				<Ocorrencia
					acionamento={'acionamento'}
					relato={
						'Enchente na vilinha com deslizamento em duas casas no mesmo número'
					}
					num_casas={3}
					status={'Em Aberto'}
					data={date}
				/>
				<Ocorrencia
					acionamento={'acionamento'}
					relato={
						'Enchente na vilinha com deslizamento em duas casas no mesmo número'
					}
					num_casas={3}
					status={'Em Aberto'}
					data={date}
				/>
				<Ocorrencia
					acionamento={'acionamento'}
					relato={
						'Enchente na vilinha com deslizamento em duas casas no mesmo número'
					}
					num_casas={3}
					status={'Em Aberto'}
					data={date}
				/>
			</S.Wrapper>
		</S.Container>
	);
};

export default Home;
