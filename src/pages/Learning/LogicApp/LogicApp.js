import React from "react";
import MultiPageContainer from "../../../components/MultiPageContainer/MultiPageContainer";
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
        <MultiPageContainer theme={props.theme} mobile={props.mobile}
          pages={[{
            name: 'Wire', element: <Wire theme={props.theme} mobile={props.mobile} />
          }, {
            name: 'NOT Gate', element: <NotGate theme={props.theme} mobile={props.mobile} />
          }, {
            name: 'OR Gate', element: <OrGate theme={props.theme} mobile={props.mobile} />
          }, {
            name: 'AND Gate', element: <AndGate theme={props.theme} mobile={props.mobile} />
          }, {
            name: 'NOR Gate', element: <NorGate theme={props.theme} mobile={props.mobile} />
          }, {
            name: 'NAND Gate', element: <NandGate theme={props.theme} mobile={props.mobile} />
          }, {
            name: 'XOR Gate', element: <XorGate theme={props.theme} mobile={props.mobile} />
          }]} />
      </FlexColumnDiv>
    </>
  )
}

export default LogicApp;