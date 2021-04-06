import React from 'react';
import { Background } from '~/styles/global';
import { useColorScheme } from 'react-native-appearance';
import CText from '~/components/Text';

// import { Container } from './styles';

const Search: React.FC = () => {
  const colorScheme = useColorScheme();

  return (
    <Background theme={colorScheme}>
      <CText color={colorScheme === 'dark' ? '#FFF' : '#000'}>Search</CText>
    </Background>
  );
};

export default Search;