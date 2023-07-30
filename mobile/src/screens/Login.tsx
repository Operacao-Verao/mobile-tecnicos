import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image } from 'expo-image';
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

import { RootStackParams } from '../Routes/tab.routes';
import team from '../assets/team.svg';
import { api } from '../lib/axios';
import { setUser } from '../redux/reducers/userReducer';
import { LoginTS } from '../types/Login';
import { saveAuthDataToStorage } from '../utils/useStorage';

const schema = yup.object({
  email: yup.string().required('Informe o email.').email(),
  // password: yup
  //   .string()
  //   .required('Informe a senha')
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
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams, 'home'>>();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<LoginTS> = async (data: LoginTS) => {
    try {
      setLoading(true);
      const { email, password } = data;

      const response = await api.post('login', { email, password });
      const token = response.data.token;
      const isLoggedIn = true;
      saveAuthDataToStorage(token, isLoggedIn);
      dispatch(setUser({ token, isLoggedIn }));

      navigation.navigate('bottomBar', { screen: 'home' });
    } catch (error) {
      console.log('Erro na autenticação.', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView className="flex-1 justify-center bg-primary">
      <Image className="h-1/2" source={team} transition={1000} contentFit="cover" />
      <View className="gap-3 p-5 mx-auto  w-screen">
        <Text className="font-semibold text-start mb-2 text-white">Email</Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange } }) => (
            <TextInput
              className="bg-slate-100 rounded-xl p-4 w-full"
              onChangeText={onChange}
              placeholder="email@email.com"
            />
          )}
        />
        {errors.email && <Text className="text-red-500">{errors.email.message}</Text>}
        <Text className="font-semibold pl-1 text-start mb-2 text-white">Senha</Text>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange } }) => (
            <TextInput
              className="bg-slate-100 rounded-xl p-4 w-full"
              placeholder="********"
              secureTextEntry
              onChangeText={onChange}
            />
          )}
        />
        {errors.password && <Text className="text-red-500">{errors.password.message}</Text>}
      </View>
      <TouchableOpacity
        className="p-5 m-5 bg-sky-500 rounded-xl"
        onPress={handleSubmit(onSubmit)}
        disabled={loading}>
        <Text className="font-semibold text-white text-center">Login</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Login;
