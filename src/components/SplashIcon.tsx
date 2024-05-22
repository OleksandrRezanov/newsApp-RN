import * as React from 'react';
import Svg, {
  SvgProps,
  G,
  Rect,
  Defs,
  Pattern,
  Use,
  ClipPath,
  Image,
} from 'react-native-svg';
const SplashIcon = (props: SvgProps) => (
  <Svg width={110} height={64} viewBox="0 0 110 64" fill="none" {...props}>
    <G clipPath="url(#clip0_1_2017)">
      <Rect width={110} height={64} fill="url(#pattern0_1_2017)" />
    </G>
    <Defs>
      <Pattern
        id="pattern0_1_2017"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use
          href="#image0_1_2017"
          transform="matrix(0.00533778 0 0 0.00917431 0.00358632 0)"
        />
      </Pattern>
      <ClipPath id="clip0_1_2017">
        <Rect width={110} height={64} fill="white" />
      </ClipPath>
      <Image
        id="image0_1_2017"
        width={186}
        height={109}
        href={{
          uri: 'data:image/png;base64,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',
        }}
      />
    </Defs>
  </Svg>
);
export default SplashIcon;
