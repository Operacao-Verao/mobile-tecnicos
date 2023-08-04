import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
} from 'react-native';
import * as yup from 'yup';

import { RootStackParams } from '../Routes/tab.routes';
import { useAppDispatch, useAppSelector } from '../redux/hooks/useAppSelector';
import { signinResponsible } from '../redux/reducers/userReducer';
import { LoginTS } from '../types/Login';
import { getAuthDataFromStorage } from '../utils/useStorage';

const schema = yup.object({
	email: yup.string().required('Informe o email.').email(),
	password: yup.string().required('Informe a senha'),
	//   .min(8, {
	//     message: 'Senha inválida. A senha deve ter pelo menos 8 caracteres.',
	//   })
	//   .max(100, { message: 'A senha deve conter no máximo 100 caracteres' })
	//   .matches(
	//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
	//     'A senha deve conter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caractere especial.'
	//   ),
});

const Login = () => {
	const dispatch = useAppDispatch();
	const state = useAppSelector((state) => state.user);
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParams, 'home'>>();
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const onSubmit: SubmitHandler<LoginTS> = async (data: LoginTS) => {
		try {
			await dispatch(
				signinResponsible({ email: data.email, password: data.password })
			).unwrap();

			navigation.navigate('bottomBar', { screen: 'home' });
		} catch (error) {
			console.log('Erro na autenticação.', error);
		} finally {
		}
	};

	useEffect(() => {
		const fetchAuthData = async () => {
			const authData = await getAuthDataFromStorage();
			if (authData?.token) {
				navigation.navigate('bottomBar', { screen: 'home' });
			}
		};
		fetchAuthData();
	}, []);

	return (
		<KeyboardAvoidingView className="flex-1 bg-white">
			<View className="flex-1 justify-between px-5 py-10">
				<View className="space-y-6">
					<Text className="font-bold text-3xl text-center">Fazer Login</Text>
					<Text className="text-slate-600 ml-1 mb-1">Email</Text>
					<Controller
						control={control}
						name="email"
						render={({ field: { onChange } }) => (
							<TextInput
								className="border-[1.25px] border-slate-400 rounded-lg p-4 w-full"
								onChangeText={onChange}
								placeholder="email@email.com"
							/>
						)}
					/>
					{errors.email && (
						<Text className="text-red-500">{errors.email.message}</Text>
					)}
					<Text className="text-slate-600 ml-1 mb-1">Senha</Text>
					<Controller
						control={control}
						name="password"
						render={({ field: { onChange } }) => (
							<TextInput
								className="border-[1.25px] border-slate-400 rounded-lg p-4 w-full"
								placeholder="********"
								secureTextEntry
								onChangeText={onChange}
							/>
						)}
					/>
					{errors.password && (
						<Text className="text-red-500">{errors.password.message}</Text>
					)}
				</View>
				<TouchableOpacity
					className="p-5 bg-sky-500 rounded-full"
					onPress={handleSubmit(onSubmit)}
					disabled={state.loading}
				>
					<Text className="font-semibold text-white text-center">
						{state.loading ? 'Carregando...' : 'Login'}
					</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
};

export default Login;
