import React from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';

interface InputTextProps extends TextInputProps {
	placeholderText?: string;
	placeholderColor: string;

	onChange: (...event: any[]) => void;
	hasSecureTextEntry?: boolean;

	hasError?: boolean;
	errorMessage?: string;
}

const InputContent = ({
	placeholderText,
	placeholderColor,
	hasSecureTextEntry,
	onChange,
	hasError,
	errorMessage,
	...rest
}: InputTextProps) => {
	return (
		<View>
			<TextInput
				className="border-[1.25px] border-slate-50 rounded-lg p-4 w-full text-darkTextColor"
				onChangeText={onChange}
				placeholder={placeholderText}
				secureTextEntry={hasSecureTextEntry}
				placeholderTextColor={placeholderColor}
			/>
			{hasError && <Text className="text-red-500">{errorMessage}</Text>}
		</View>
	);
};

export default InputContent;
