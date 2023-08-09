import { Octicons, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Login from '../screens/Login';
import OcorrenciaScreen from '../screens/Ocorrencia';
import RelatorioScreen from '../screens/Relatorio';
import Config from '../screens/Config';
import { useAppSelector } from '../redux/hooks/useApp';

export type RootStackParams = {
	bottomBar: any;
	home: any;
	login: any;
	ocorrencia: any;
	relatorio: any;
	config: any;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParams>();

const TabRoutes = () => {
	const theme = useAppSelector((state) => state.theme);

	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: '#0ea5e9',
				tabBarShowLabel: false,
				tabBarStyle: {
					height: 60,
					paddingTop: 5,
					paddingBottom: 10,
					borderTopWidth: 0,
					backgroundColor: `${theme.status === 'dark' ? '#202020' : '#fff'}`,
				},
			}}
		>
			<Tab.Screen
				name="home"
				component={Home}
				options={{
					tabBarIcon: ({ color }) => (
						<Octicons name="home" color={color} size={24} />
					),
				}}
			/>
			<Tab.Screen
				name="relatorio"
				component={RelatorioScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<Ionicons name="newspaper-outline" color={color} size={26} />
					),
				}}
			/>
			<Tab.Screen
				name="config"
				component={Config}
				options={{
					tabBarIcon: ({ color }) => (
						<Octicons name="gear" color={color} size={24} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default TabRoutes;

export function AppRoutes() {
	const user = useAppSelector((state) => state.user);

	return (
		<NavigationContainer independent>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<>
					{user.token ? (
						<>
							<Stack.Screen
								name="bottomBar"
								component={TabRoutes}
								options={{ headerShown: false }}
							/>
							<Stack.Screen name="ocorrencia" component={OcorrenciaScreen} />
						</>
					) : (
						<Stack.Screen name="login" component={Login} />
					)}
				</>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
