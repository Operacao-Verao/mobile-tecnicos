import React from 'react';
import { View } from 'react-native';
import * as S from './styles';

type Props = {
	status?: boolean | null | undefined;
	gravidade?: number | null | undefined;
};

export const OpenStatus = ({ status }: Props) => {
	return (
		<View>
			{status === true ? (
				<S.TextGreen>Em Aberto</S.TextGreen>
			) : (
				<S.TextRed>Fechado</S.TextRed>
			)}
		</View>
	);
};

export const GravidadeStatus = ({ gravidade }: Props) => {
	return (
		<View>
			{gravidade === 1 ? (
				<S.TextYellow>Risco</S.TextYellow>
			) : (
				<S.TextRed>Desastre</S.TextRed>
			)}
		</View>
	);
};
