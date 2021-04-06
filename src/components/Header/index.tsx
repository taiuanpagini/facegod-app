import React from 'react';
import theme from '~/styles/Theme/theme';

import { Container } from './styles';
import Logo from '~/img/Logo';
import Actions from './Actions';


const Header: React.FC = () => (
  <Container>
    <Logo color={theme.colors.white} />
    <Actions />
  </Container>
);

export default Header;