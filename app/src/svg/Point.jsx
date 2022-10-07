import * as React from "react"
import Svg, { Circle } from "react-native-svg"

const SvgPoint = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={9} height={9} {...props}>
    <Circle data-name="Ellipse 2" cx={4.5} cy={4.5} r={4.5} fill="#fff" />
  </Svg>
)

export default SvgPoint;
