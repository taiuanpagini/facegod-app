import * as React from 'react';
import { SvgCss } from 'react-native-svg';
import { IIcon } from './interface';

const Pray: React.FC<IIcon> = ({ color }) => {
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
export default Pray;