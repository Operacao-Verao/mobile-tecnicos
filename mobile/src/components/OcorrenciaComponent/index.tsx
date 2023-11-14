import React from 'react';
import { OcorrenciaTS } from '../../types/Ocorrencia';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../Routes/tab.routes';
import { OpenStatus } from '../Status';
import * as S from './styles';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/useApp';
import { fetchOneOcorrencia } from '../../redux/reducers/ocorrenciaReducer';
import { useFormattedDate } from '../../utils/useFormattedDate';

export function Ocorrencia(data: OcorrenciaTS) {
	const token = useAppSelector((state) => state.user.token);
	const dispatch = useAppDispatch();
	const date = useFormattedDate(data.data);
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParams, 'ocorrencia'>>();

	const handleNavigate = () => {
		dispatch(fetchOneOcorrencia({ id: data.id, token: token }));
		navigation.navigate('ocorrencia');
	};

	return (
		<S.Container>
			<S.Row>
				<S.Address ellipsizeMode='tail' numberOfLines={2}>{data.endereco.rua + ' - ' + data.endereco.bairro}</S.Address>
			</S.Row>
			<S.Row>
				<S.SmallText>{date}</S.SmallText>
				<S.Button onPress={handleNavigate}>
					<S.ButtonText>Ver detalhes</S.ButtonText>
				</S.Button>
			</S.Row>
		</S.Container>
	);
}
