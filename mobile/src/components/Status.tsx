import React from 'react';
import { Text, View } from 'react-native';
import { useAppSelector } from '../redux/hooks/useAppSelector';

const Status = () => {
	const state = useAppSelector((state) => state.ocorrencia);

	return (
		<View>
			{state.ocorrencia.status === 'Em Aberto' ? (
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

export default Status;
