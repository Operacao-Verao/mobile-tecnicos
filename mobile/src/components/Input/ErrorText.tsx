import React from 'react';
import { Text, View } from 'react-native';
import { styled } from 'styled-components/native';

interface ErrorTextProps {
	ErrorText?: string;
}

const ErrorText = ({ ErrorText }: ErrorTextProps) => {
	return <View>{ErrorText && <TextError>{ErrorText}</TextError>}</View>;
};

const TextError = styled.Text`
	color: #ef4444;
	margin: 6px 0 0 4px;
	font-family: Poppins_400Regular;
`;

export default ErrorText;
