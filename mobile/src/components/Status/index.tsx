import React from 'react';
import { View } from 'react-native';
import * as S from './styles';

type Props = {
	status: string | null | undefined;
};

export const OpenStatus = ({ status }: Props) => {
	return (
		<View>
			{status === 'Em Aberto' ? (
				<S.TextGreen>Em Aberto</S.TextGreen>
			) : (
				<S.TextRed>Fechado</S.TextRed>
			)}
		</View>
	);
};

export const GravidadeStatus = ({ status }: Props) => {
	return (
		<View>
			{status === 'Risco' ? (
				<S.TextYellow>Risco</S.TextYellow>
			) : (
				<S.TextRed>Desastre</S.TextRed>
			)}
		</View>
	);
};
