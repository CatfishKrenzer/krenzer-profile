import React from "react";
import { LedOutput } from "./LogicAppStyles";

const OutputLightSide = (props) => {

  return (
    <>
      <LedOutput theme={props.theme} active={props.isActive} mobile={props.mobile} style={props.style} />
    </>
  )
}

export default OutputLightSide;