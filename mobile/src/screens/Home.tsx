import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import { getAuthDataFromStorage } from '../utils/useStorage';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | undefined>(undefined);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchAuthData = async () => {
      const authData = await getAuthDataFromStorage();
      if (authData) {
        setIsLoggedIn(authData.isLoggedIn);
        setToken(authData.token);
      }
    };

    fetchAuthData();
  }, []);

  return (
    <View>
      <Text>Home</Text>
      <Text className="text-black">Logado: {isLoggedIn ? 'Sim' : 'Não'}</Text>
      <Text className="text-black">Token: {token}</Text>
    </View>
  );
};

export default Home;
