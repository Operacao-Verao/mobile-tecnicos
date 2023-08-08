import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { OcorrenciaTS } from '../../types/Ocorrencia';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../Routes/tab.routes';
import { OpenStatus } from '../Status';
import * as S from './styles';

export function Ocorrencia(data: OcorrenciaTS) {
	const formattedDate = data.data?.toLocaleString();
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParams, 'ocorrencia'>>();

	const handleNavigate = () => {
		navigation.navigate('ocorrencia');
	};

	return (
		<S.Container>
			<S.Row>
				<S.Address>Av. Sete de Setembro, 38 Centro</S.Address>
				<OpenStatus status={data.status} />
			</S.Row>
			<S.SmallText>{data.relato}</S.SmallText>
			<S.Row>
				<S.SmallText>{formattedDate}</S.SmallText>
				<S.Button onPress={handleNavigate}>
					<S.ButtonText>Ver detalhes</S.ButtonText>
				</S.Button>
			</S.Row>
		</S.Container>
	);
}
