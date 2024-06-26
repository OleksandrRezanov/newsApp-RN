import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const ArrowIcon: React.FC = (props: SvgProps) => (
  <Svg width={17} height={12} viewBox="0 0 17 12" fill="none" {...props}>
    <Path
      d="M1.25 6L0.896447 5.64645L0.542893 6L0.896447 6.35355L1.25 6ZM16.25 6.5C16.5261 6.5 16.75 6.27614 16.75 6C16.75 5.72386 16.5261 5.5 16.25 5.5V6.5ZM5.89645 0.646447L0.896447 5.64645L1.60355 6.35355L6.60355 1.35355L5.89645 0.646447ZM0.896447 6.35355L5.89645 11.3536L6.60355 10.6464L1.60355 5.64645L0.896447 6.35355ZM1.25 6.5H16.25V5.5H1.25V6.5Z"
      fill="#8E949A"
    />
  </Svg>
);
