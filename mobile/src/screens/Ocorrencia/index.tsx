import React from 'react';

import { RootStackParams } from '../../Routes/tab.routes';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/useApp';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { OpenStatus } from '../../components/Status';
import BackButton from '../../components/BackButton';
import RelatorioComponent from '../../components/RelatorioComponent';
import { Loading } from '../../components/Loading';
import { useFormattedDate } from '../../utils';
import * as S from './styles';

const OcorrenciaScreen = () => {
	const dispatch = useAppDispatch();
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParams, 'relatorio'>>();
	const loading = useAppSelector((state) => state.ocorrencia.loading);
	const state = useAppSelector((state) => state.ocorrencia.ocorrencia);
	const date = useFormattedDate(state.data);

	const handleCreate = () => {
		navigation.navigate('relatorio');
	};

	if (loading) {
		return <Loading />;
	}

	return (
		<S.Container>
			<S.OcorrenciaWrapper>
				<S.Row>
					<S.RowWTBetween>
						<BackButton />
						<S.Date>{date}</S.Date>
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
			{state.relatorio ? (
				<RelatorioComponent />
			) : (
				<S.Button onPress={handleCreate}>
					<S.ButtonText>Criar Relatório</S.ButtonText>
				</S.Button>
			)}
		</S.Container>
	);
};

export default OcorrenciaScreen;
