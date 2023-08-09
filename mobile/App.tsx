import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import {
	useFonts,
	Poppins_400Regular,
	Poppins_500Medium,
	Poppins_600SemiBold,
	Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import Routes from './src/Routes';
import { store } from './src/redux/store';
import { Loading } from './src/components/Loading';

export default function App() {
	const [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_500Medium,
		Poppins_600SemiBold,
		Poppins_700Bold,
	});

	if (!fontsLoaded) {
		return <Loading />;
	}

	return (
		<Provider store={store}>
			<SafeAreaView style={{ flex: 1 }}>
				<Routes />
				<StatusBar backgroundColor="#202020" style="light" translucent />
			</SafeAreaView>
		</Provider>
	);
}
