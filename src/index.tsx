import React from 'react';

import 'react-native-gesture-handler';
import './config/ReactotronConfig';

import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { NavigationContainer } from '@react-navigation/native';

import App from './App';
import { StatusBar } from 'react-native';
import theme from './styles/Theme/theme';

const Index: React.FC = () => {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer>
      <AppearanceProvider>
        <StatusBar barStyle={colorScheme === 'dark' ? "light-content" : "dark-content"} backgroundColor={colorScheme === 'dark' ? theme.colors.black : theme.colors.white} />
        <App />
      </AppearanceProvider>
    </NavigationContainer>
  );
};

export default Index;
