import * as React from 'react';
import { SvgCss } from 'react-native-svg';
import { IIcon } from './interface';

const PlusRound: React.FC<IIcon> = ({ color }) => {
  const svg = `
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect width="23" height="23" fill="url(#pattern0)"/>
    <defs>
    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlink:href="#image0" transform="scale(0.01)"/>
    </pattern>
    <image id="image0" width="100" height="100" xlink:href="data:image/png;base64,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"/>
    </defs>
    </svg>
  `;

  return <SvgCss fill={color} xml={svg} />;
};

export default PlusRound;
