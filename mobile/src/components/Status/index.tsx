import React from 'react';
import { Text, View } from 'react-native';

type Props = {
	status: string | null | undefined;
};

export const OpenStatus = ({ status }: Props) => {
	return (
		<View>
			{status === 'Em Aberto' ? (
				<Text className="px-3 py-2 rounded-full bg-green-100 text-green-500 text-right">
					Em Aberto
				</Text>
			) : (
				<Text className="px-3 py-2 rounded-full bg-red-100 text-red-500 text-right">
					Fechado
				</Text>
			)}
		</View>
	);
};

export const GravidadeStatus = ({ status }: Props) => {
	return (
		<View>
			{status === 'Risco' ? (
				<Text className="px-3 py-2 rounded-full bg-yellow-200 text-yellow-600 text-center">
					Risco
				</Text>
			) : (
				<Text className="px-3 py-2 rounded-full bg-red-100 text-red-500 text-center">
					Desastre
				</Text>
			)}
		</View>
	);
};
