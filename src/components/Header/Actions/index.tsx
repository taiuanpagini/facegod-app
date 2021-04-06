import React from 'react';

import { HeaderMenu } from './styles';

import Messages from '~/img/Messages';
import Pray from '~/img/Pray';
import PlusRound from '~/img/PlusRound';
import BtnIcon from '~/components/BtnIcon';

const Actions: React.FC = () => (
  <HeaderMenu>
    <BtnIcon Icon={PlusRound} />
    <BtnIcon Icon={Pray} />
    <BtnIcon Icon={Messages} />
  </HeaderMenu>
);
export default Actions;