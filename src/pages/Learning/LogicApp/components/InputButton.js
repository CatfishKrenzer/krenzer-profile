import React, { useState } from "react";
import { LogicButtonInnerCircle, LogicButtonOuterCircle } from "./LogicAppStyles";

const InputButton = (props) => {
  const [isActive, setIsActive] = useState(false);

  const setButtonIsActive = (active) => {
    props?.setActive?.(active);
    setIsActive(active);
  }
  return (
    <>
      <LogicButtonOuterCircle theme={props.theme} mobile={props.mobile}>
        <LogicButtonInnerCircle theme={props.theme} active={isActive} mobile={props.mobile} onClick={() => { setButtonIsActive(!isActive) }} />
      </LogicButtonOuterCircle>
    </>
  )
}

export default InputButton;