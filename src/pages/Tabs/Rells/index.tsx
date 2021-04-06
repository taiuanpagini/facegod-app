import React from 'react';
import { Background } from '~/styles/global';
import { useColorScheme } from 'react-native-appearance';
import CText from '~/components/Text';

// import { Container } from './styles';

const Rells: React.FC = () => {
  const colorScheme = useColorScheme();

  return (
    <Background theme={colorScheme}>
      <CText color={colorScheme === 'dark' ? '#FFF' : '#000'}>Rells</CText>
    </Background>
  );
};

export default Rells;