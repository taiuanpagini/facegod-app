import React, { useEffect } from 'react';
import { Background } from '~/styles/global';
import { useColorScheme } from 'react-native-appearance';
import CText from '~/components/Text';
import Header from '~/components/Header';
import api from '~/services/api';
import Stories from '~/components/Stories';
import stories from '~/db.json';

// import { Container } from './styles';

const Home: React.FC = () => {
  const colorScheme = useColorScheme();

  return (
    <Background theme={colorScheme}>
      <Header />
      <Stories stories={stories.stories} />
    </Background>
  );
};

export default Home;