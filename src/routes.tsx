import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from 'react-native-appearance';

import SignIn from './pages/SignIn';
import HomeTab from './pages/Tabs/Home';
import SearchTab from './pages/Tabs/Search';
import NewTab from './pages/Tabs/New';
import RellsTab from './pages/Tabs/Rells';
import ProfileTab from './pages/Tabs/Profile';

import House from './img/House';
import HouseFocus from './img/HouseFocus';
import Loupe from './img/Loupe';
import LoupeFocus from './img/LoupeFocus';
import Plus from './img/Plus';
import PlusFocus from './img/PlusFocus';
import Video from './img/Video';
import VideoFocus from './img/VideoFocus';
import User from './img/User';
import theme from './styles/Theme/theme';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Routes: React.FC = () => {
  // const signed = useSelector((state) => state.auth.signed);
  const [colorIcon, setColorIcon] = useState<string>();
  const colorScheme = useColorScheme();
  const signed = true;

  useEffect(() => {
    setColorIcon(colorScheme === 'dark' ? theme.colors.white : theme.colors.black);
  }, [colorScheme]);

  return (
    <NavigationContainer independent>
      {!signed ? (
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerBackTitleVisible: false,
            animationEnabled: false,
          }}
        >
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              headerTitle: '',
              headerTransparent: true,
            }}
          />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: '#FF5B57',
            showLabel: false,
            style: {
              backgroundColor: colorScheme === 'dark' ? theme.colors.black : theme.colors.white,
            }
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeTab}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ focused }) => (
                focused ? <HouseFocus color={colorIcon} /> : <House color={colorIcon} />
              ),
            }}
          />
          <Tab.Screen
            name="Pesquisa"
            component={SearchTab}
            options={{
              tabBarLabel: 'Pesquisa',
              tabBarIcon: ({ focused }) => (
                focused ? <LoupeFocus color={colorIcon} /> : <Loupe color={colorIcon} />
              ),
            }}
          />
          <Tab.Screen
            name="Novo"
            component={NewTab}
            options={{
              tabBarLabel: 'Novo',
              tabBarIcon: ({ focused }) => (
                focused ? <PlusFocus color={colorIcon} /> : <Plus color={colorIcon} />
              ),
            }}
          />
          <Tab.Screen
            name="Rells"
            component={RellsTab}
            options={{
              tabBarLabel: 'Rells',
              tabBarIcon: ({ focused }) => (
                focused ? <VideoFocus color={colorIcon} /> : <Video color={colorIcon} />
              ),
            }}
          />
          <Tab.Screen
            name="Perfil"
            component={ProfileTab}
            options={{
              tabBarLabel: 'Perfil',
              tabBarIcon: () => (
                <User color={colorIcon} />
              ),
            }}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Routes;