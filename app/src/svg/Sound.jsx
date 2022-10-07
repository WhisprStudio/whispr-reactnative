import * as React from "react"
import Svg, { Path, G } from "react-native-svg";

const SvgSound = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={'100%'}
    height={'100%'}
    scale={0.2}
    {...props}
  >
    <G
      data-name="Icon feather-volume-1"
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
    >
      <Path
        data-name="Trac\xE9 1"
        d="M10.886 1.5 5.671 5.671H1.5v6.257h4.171l5.215 4.172Z"
      />
      <Path data-name="Trac\xE9 2" d="M15.62 5.108a5.214 5.214 0 0 1 0 7.373" />
    </G>
  </Svg>
)

export default SvgSound;
