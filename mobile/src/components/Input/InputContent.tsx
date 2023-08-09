import React from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import { styled } from 'styled-components/native';
import { useAppSelector } from '../../redux/hooks/useApp';

interface InputTextProps extends TextInputProps {
	placeholderText?: string;

	onChange: (...event: any[]) => void;
	hasSecureTextEntry?: boolean;
}

const InputContent = ({
	placeholderText,
	hasSecureTextEntry,
	onChange,
	...rest
}: InputTextProps) => {
	const theme = useAppSelector((state) => state.theme);
	let placeholderColor = '';

	theme.status === 'light'
		? (placeholderColor = '#000')
		: (placeholderColor = '#fff');

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
	border: ${(props) => props.theme.border};
	color: ${(props) => props.theme.color};
	font-family: Poppins_400Regular;
	border-radius: 8px;
	padding: 16px;
	width: 100%;
	margin-top: -10px;
`;

export default InputContent;
