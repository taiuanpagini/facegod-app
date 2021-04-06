import React from 'react';
import { Background } from '~/styles/global';
import { useColorScheme } from 'react-native-appearance';
import CText from '~/components/Text';
import Header from '~/components/Header';

// import { Container } from './styles';

const Home: React.FC = () => {
  const colorScheme = useColorScheme();

  return (
    <Background theme={colorScheme}>
      <Header />
      <CText color={colorScheme === 'dark' ? '#FFF' : '#000'}>Home</CText>
    </Background>
  );
};

export default Home;