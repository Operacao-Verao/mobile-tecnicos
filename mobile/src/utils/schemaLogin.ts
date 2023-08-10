import * as yup from 'yup';

export const schemaLogin = yup.object({
	email: yup
		.string()
		.required('Informe o email.')
		.email('O email não é válido.'),
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
