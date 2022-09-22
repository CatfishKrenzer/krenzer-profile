import React from "react";
import { LedOutputTop } from "./LogicAppStyles";

const OutputLight = (props) => {

  return (
    <>
      <LedOutputTop theme={props.theme} active={props.isActive} mobile={props.mobile} style={props.style} />
    </>
  )
}

export default OutputLight;