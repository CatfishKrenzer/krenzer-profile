import React, { useEffect, useState } from "react";
import { FlexColumnDiv, FlexRowDiv } from "../../../../styles";
import InputButton from "./InputButton";
import { HorizontalWire, Gate, BendDownWire, BendUpWire } from "./LogicAppStyles";
import OutputLight from "./OutputLight";
import { TruthTable, TruthTableHeader, TruthTableBody, TruthTableOutputCell, TruthTableCurrentRow } from "./Styles";

const lightGate = require('../gate-images/nand-light.png');
const darkGate = require('../gate-images/nand-dark.png');

const NandGate = (props) => {
  const [button1State, setButton1State] = useState(false);
  const [button2State, setButton2State] = useState(false);

  const [buttonState, setButtonState] = useState(0);

  useEffect(() => {
    switch (`${button1State}-${button2State}`) {
      case 'false-true':
        setButtonState(1);
        break;
      case 'true-false':
        setButtonState(2);
        break;
      case 'true-true':
        setButtonState(3);
        break;
      case 'false-false':
      default:
        setButtonState(0);
        break;
    }
  }, [button1State, button2State])

  return (
    <>
      <h2>NAND Gate Logic</h2>
      <p>
        A NAND gate will provide the exact inverse output than an AND gate.
      </p>
      <h3>Truth Table</h3>
      <div>
        <TruthTable theme={props.theme}>
          <thead>
            <TruthTableHeader colSpan={3} theme={props.theme}>
              <th colSpan={2}>Input</th><TruthTableOutputCell colSpan={1} theme={props.theme}>Output</TruthTableOutputCell>
            </TruthTableHeader>
          </thead>
          <TruthTableBody colSpan={3} theme={props.theme}>
            <TruthTableCurrentRow current={buttonState === 0} theme={props.theme}>
              <td>0</td><td>0</td><TruthTableOutputCell theme={props.theme}>1</TruthTableOutputCell>
            </TruthTableCurrentRow>
            <TruthTableCurrentRow current={buttonState === 1} theme={props.theme}>
              <td>0</td><td>1</td><TruthTableOutputCell theme={props.theme}>1</TruthTableOutputCell>
            </TruthTableCurrentRow>
            <TruthTableCurrentRow current={buttonState === 2} theme={props.theme}>
              <td>1</td><td>0</td><TruthTableOutputCell theme={props.theme}>1</TruthTableOutputCell>
            </TruthTableCurrentRow>
            <TruthTableCurrentRow current={buttonState === 3} theme={props.theme}>
              <td>1</td><td>1</td><TruthTableOutputCell theme={props.theme}>0</TruthTableOutputCell>
            </TruthTableCurrentRow>
          </TruthTableBody>
        </TruthTable>
      </div>

      <FlexRowDiv style={{ marginTop: '50px', width: '100vw', justifyContent: 'center' }}>
        <FlexColumnDiv>
          <FlexRowDiv style={{ marginTop: '50px', justifyContent: 'center' }}>
            <InputButton theme={props.theme} mobile={props.mobile} setActive={(active) => setButton1State(active)} />
            <BendDownWire theme={props.theme} mobile={props.mobile} active={button1State} style={{ width: props.mobile ? '50px' : '200px', marginTop: props.mobile ? '30px' : '76px' }} />
            <HorizontalWire theme={props.theme} mobile={props.mobile} active={button1State} style={{ width: props.mobile ? '50px' : '200px', marginTop: props.mobile ? '65px' : '150px' }} />
          </FlexRowDiv>
          <FlexRowDiv style={{ marginTop: props.mobile ? '16px' : '37px', justifyContent: 'center' }}>
            <InputButton theme={props.theme} mobile={props.mobile} setActive={(active) => setButton2State(active)} />
            <BendUpWire theme={props.theme} mobile={props.mobile} active={button2State} style={{ width: props.mobile ? '50px' : '200px', marginBottom: props.mobile ? '35px' : '74px' }} />
            <HorizontalWire theme={props.theme} mobile={props.mobile} active={button2State} style={{ width: props.mobile ? '50px' : '200px', marginTop: '0' }} />
          </FlexRowDiv>
        </FlexColumnDiv>

        <Gate src={props.theme === 'light' ? lightGate : darkGate} theme={props.theme} mobile={props.mobile} style={{ marginTop: props.mobile ? '100px' : '170px' }} />
        <HorizontalWire theme={props.theme} mobile={props.mobile} active={buttonState !== 3} style={{ width: props.mobile ? '50px' : '200px', marginTop: props.mobile ? '124px' : '220px' }} />
        <OutputLight theme={props.theme} mobile={props.mobile} isActive={buttonState !== 3} style={{ marginTop: props.mobile ? '112px' : '195px' }} />
      </FlexRowDiv>
    </>
  )
}

export default NandGate;