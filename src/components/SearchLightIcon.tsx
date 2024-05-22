import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';

export const SearchLightIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle cx={11} cy={11} r={6} stroke="#8E949A" />
    <Path d="M20 20L17 17" stroke="#8E949A" strokeLinecap="round" />
  </Svg>
);
