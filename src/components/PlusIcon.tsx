import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const PlusIcon: React.FC = (props: SvgProps) => (
  <Svg width={30} height={30} viewBox="0 0 30 30" fill="none" {...props}>
    <Path d="M15 7.5L15 22.5" stroke="#8E949A" strokeLinecap="round" />
    <Path d="M22.5 15L7.5 15" stroke="#8E949A" strokeLinecap="round" />
  </Svg>
);
