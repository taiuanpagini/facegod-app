import * as React from 'react';
import { SvgCss } from 'react-native-svg';
import { IIcon } from './interface';

const Plus: React.FC<IIcon> = ({ color }) => {
  const svg = `
    <svg height="25" viewBox="0 0 426.66667 426.66667" width="25" xmlns="http://www.w3.org/2000/svg">
      <path d="m410.667969 229.332031h-394.667969c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h394.667969c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
      <path d="m213.332031 426.667969c-8.832031 0-16-7.167969-16-16v-394.667969c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v394.667969c0 8.832031-7.167969 16-16 16zm0 0"/>
    </svg>
  `;

  return <SvgCss fill={color} xml={svg} />;
};
export default Plus;
