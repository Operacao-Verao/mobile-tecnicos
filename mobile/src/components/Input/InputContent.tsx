import React from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import { styled } from 'styled-components/native';

interface InputTextProps extends TextInputProps {
	placeholderText?: string;
	placeholderColor: string;

	onChange: (...event: any[]) => void;
	hasSecureTextEntry?: boolean;
}

const InputContent = ({
	placeholderText,
	placeholderColor,
	hasSecureTextEntry,
	onChange,
	...rest
}: InputTextProps) => {
	return (
		<View>
			<Input
				onChangeText={onChange}
				placeholder={placeholderText}
				secureTextEntry={hasSecureTextEntry}
				placeholderTextColor={placeholderColor}
			/>
		</View>
	);
};

const Input = styled.TextInput`
	border: 1.25px solid #f8fafc;
	border-radius: 8px;
	padding: 16px;
	width: 100%;
	color: #fff;
`;

export default InputContent;
