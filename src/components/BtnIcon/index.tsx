import React from 'react';
import { IBtnIcon } from './interface';

import { Button } from './styles';
import { useColorScheme } from 'react-native-appearance';
import theme from '~/styles/Theme/theme';

const BtnIcon: React.FC<IBtnIcon> = ({ Icon }) => {
  const colorScheme = useColorScheme();

  return (
    <Button>
      <Icon color={colorScheme === 'dark' ? theme.colors.white : theme.colors.black} />
    </Button>
  );
};

export default BtnIcon;