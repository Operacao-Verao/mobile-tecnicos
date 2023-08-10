import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { Input } from '../../components/Input';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as S from './styles';
import { schemaLogin } from '../../utils/schemaLogin';

import { RootStackParams } from '../../Routes/tab.routes';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/useApp';
import { signinResponsible } from '../../redux/reducers/userReducer';
import { LoginTS } from '../../types/Login';
import { getAuthDataFromStorage } from '../../utils/useStorage';

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
				signinResponsible({ email: data.email, password: data.password })
			).unwrap();

			if (state.token) {
				navigation.navigate('bottomBar', { screen: 'home' });
			}
		} catch (error) {
			setAuthError(!!error);
			console.log('Erro na autenticação.', error);
		}
	};

	useEffect(() => {
		const fetchAuthData = async () => {
			const authData = await getAuthDataFromStorage();
			if (!authData?.token) {
				navigation.navigate('bottomBar', { screen: 'home' });
			}
		};
		fetchAuthData();
	}, []);

	return (
		<S.Container>
			<S.Wrapper>
				<S.Form>
					<S.Title>Login</S.Title>
					{authError && (
						<S.ViewError>
							<S.TextError>Usuário não encontrado.</S.TextError>
						</S.ViewError>
					)}
					<S.Label>Email</S.Label>
					<Controller
						control={control}
						name="email"
						render={({ field: { onChange } }) => (
							<Input.Root>
								<Input.Input
									placeholderText="eve.holt@reqres.in"
									onChange={onChange}
								/>
								<Input.ErrorText ErrorText={errors.email?.message} />
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
									placeholderText="cityliscka"
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
