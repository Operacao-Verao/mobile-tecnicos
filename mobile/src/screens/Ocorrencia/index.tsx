// TODO: Usar a requisição do redux pra botar na tela a ocorrência

import React from 'react';
import { Loading } from '../../components/Loading';
import RelatorioComponent from '../../components/RelatorioComponent';
import { OpenStatus } from '../../components/Status';
import { useAppSelector } from '../../redux/hooks/useApp';
import * as S from './styles';
import BackButton from '../../components/BackButton';

const OcorrenciaScreen = () => {
	const loading = useAppSelector((state) => state.ocorrencia.loading);
	const state = useAppSelector((state) => state.ocorrencia.ocorrencia);
	const formattedDate = new Date(state.data);

	if (loading) {
		return <Loading />;
	}

	return (
		<S.Container>
			<S.OcorrenciaWrapper>
				<S.Row>
					<S.RowWTBetween>
						<BackButton />
						<S.Date>{formattedDate.toString()}</S.Date>
					</S.RowWTBetween>
					<OpenStatus status={state.status} />
				</S.Row>
				<S.Ocorrencia>
					<S.Column>
						<S.Label>Endereço:</S.Label>
						<S.Info>
							{state.endereco.rua}, {state.endereco.bairro},{' '}
							{state.endereco.cidade}
						</S.Info>
					</S.Column>
				</S.Ocorrencia>
			</S.OcorrenciaWrapper>
			{!state.relatorio && <RelatorioComponent />}
		</S.Container>
	);
};

export default OcorrenciaScreen;
