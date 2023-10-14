import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '../../redux/hooks/useApp';

const BackButton = () => {
	const theme = useAppSelector((state) => state.theme);
	const { goBack } = useNavigation();
	const color = theme.status === 'dark' ? 'white' : 'black';

	return (
		<TouchableOpacity activeOpacity={0.7} onPress={goBack}>
			<Feather name="arrow-left" size={26} color={color} />
		</TouchableOpacity>
	);
};

export default BackButton;
