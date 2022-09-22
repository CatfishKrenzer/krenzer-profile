import React from "react";
import { FlexColumnDiv } from "../../../styles";
import AndGate from "./components/AndGate";
import NandGate from "./components/NandGate";
import NorGate from "./components/NorGate";
import NotGate from "./components/NotGate";
import OrGate from "./components/OrGate";
import Wire from "./components/Wire";
import XorGate from "./components/XorGate";

const LogicApp = (props) => {
  return (
    <>
      <FlexColumnDiv>
        <h1>Learning Logic Gates</h1>

        <Wire theme={props.theme} mobile={props.mobile} />
        <NotGate theme={props.theme} mobile={props.mobile} />
        <OrGate theme={props.theme} mobile={props.mobile} />
        <AndGate theme={props.theme} mobile={props.mobile} />
        <NorGate theme={props.theme} mobile={props.mobile} />
        <NandGate theme={props.theme} mobile={props.mobile} />
        <XorGate theme={props.theme} mobile={props.mobile} />
      </FlexColumnDiv>
    </>
  )
}

export default LogicApp;