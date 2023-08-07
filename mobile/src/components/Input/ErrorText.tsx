import React from 'react';
import { Text, View } from 'react-native';

interface ErrorTextProps {
	ErrorText?: string;
}

const ErrorText = ({ ErrorText }: ErrorTextProps) => {
	return (
		<View>
			{ErrorText && <Text className="text-red-500 ml-1 mt-1">{ErrorText}</Text>}
		</View>
	);
};

export default ErrorText;
