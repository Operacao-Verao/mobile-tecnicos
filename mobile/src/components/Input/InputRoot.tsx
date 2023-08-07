import { ReactNode } from 'react';
import { View } from 'react-native';

interface InputRootProps {
	children: ReactNode;
}

const InputRoot = ({ children }: InputRootProps) => {
	return <View>{children}</View>;
};

export default InputRoot;
