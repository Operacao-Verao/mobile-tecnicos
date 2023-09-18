import React from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import { styled } from 'styled-components/native';
import { useAppSelector } from '../../redux/hooks/useApp';

interface InputTextProps extends TextInputProps {
	keyboardType?: 'numeric';
	placeholderText?: string;
	numberOfLines?: number;
	multiline?: boolean;
	hasSecureTextEntry?: boolean;
	onChange: (...event: any[]) => void;
}

const InputContent = ({
	placeholderText,
	hasSecureTextEntry,
	numberOfLines,
	keyboardType,
	multiline,
	onChange,
	...rest
}: InputTextProps) => {
	const theme = useAppSelector((state) => state.theme);
	let placeholderColor = '';

	theme.status === 'light'
		? (placeholderColor = '#000')
		: (placeholderColor = '#cbd5e1');

	return (
		<Input
			onChangeText={onChange}
			placeholder={placeholderText}
			secureTextEntry={hasSecureTextEntry}
			placeholderTextColor={placeholderColor}
			keyboardType={keyboardType}
			multiline={multiline}
			numberOfLines={numberOfLines}
		/>
	);
};

const Input = styled.TextInput`
	border: ${(props) => props.theme.border};
	color: ${(props) => props.theme.color};
	font-family: Poppins_400Regular;
	border-radius: 8px;
	padding: 16px;
	min-width: 29%;
	margin-top: -10px;
`;

export default InputContent;
