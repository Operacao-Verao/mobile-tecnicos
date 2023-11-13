import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks/useApp';
import { signinResponsible } from '../../redux/reducers/userReducer';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../Routes/tab.routes';
import { schemaLogin } from '../../utils';

import { Input } from '../../components/Input';
import { LoginTS } from '../../types/Login';
import * as S from './styles';

const Login = () => {
	const [authError, setAuthError] = useState(false);
	const dispatch = useAppDispatch();
	const state = useAppSelector((state) => state.user);
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParams, 'home'>>();
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schemaLogin) });
	const onSubmit: SubmitHandler<LoginTS> = async (data: LoginTS) => {
		try {
			await dispatch(
				signinResponsible({ username: data.username, password: data.password })
			).unwrap();
			if (state.token) {
				navigation.navigate('bottomBar', { screen: 'home' });
			}
		} catch (error) {
			setAuthError(!!error);
			console.log('Erro na autenticação: ', error);
		}
	};

	return (
		<S.Container>
			<S.Wrapper>
				<S.Form>
					{authError ? (
						<S.ViewError>
							<S.TextError>Usuário não encontrado.</S.TextError>
						</S.ViewError>
					) : (
						<S.Title>Login</S.Title>
					)}
					<S.Label>Email</S.Label>
					<Controller
						control={control}
						name="username"
						render={({ field: { onChange } }) => (
							<Input.Root>
								<Input.Input
									placeholderText="tonin@gmail.com"
									onChange={onChange}
								/>
								<Input.ErrorText ErrorText={errors.username?.message} />
							</Input.Root>
						)}
					/>
					<S.Label>Senha</S.Label>
					<Controller
						control={control}
						name="password"
						render={({ field: { onChange } }) => (
							<Input.Root>
								<Input.Input
									placeholderText="1234"
									hasSecureTextEntry
									onChange={onChange}
								/>
								<Input.ErrorText ErrorText={errors.password?.message} />
							</Input.Root>
						)}
					/>
				</S.Form>
				<S.Button onPress={handleSubmit(onSubmit)} disabled={state.loading}>
					<S.TextButton>
						{state.loading ? 'Carregando...' : 'Login'}
					</S.TextButton>
				</S.Button>
			</S.Wrapper>
		</S.Container>
	);
};

export default Login;
