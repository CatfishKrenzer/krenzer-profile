import React, { useState } from "react";
import { FlexRowDiv } from "../../../../styles";
import InputButton from "./InputButton";
import { HorizontalWire } from "./LogicAppStyles";
import OutputLight from "./OutputLight";
import { TruthTable, TruthTableHeader, TruthTableBody, TruthTableOutputCell, TruthTableCurrentRow } from "./Styles";

const Wire = (props) => {
  const [buttonState, setButtonState] = useState(false);

  return (
    <>
      <h2>Wire Logic</h2>
      <p>
        A wire is on when the input is on, and off when the input is off.
      </p>
      <h3>Truth Table</h3>
      <div>
        <TruthTable theme={props.theme}>
          <thead>
            <TruthTableHeader colSpan={2} theme={props.theme}>
              <th>Input</th><TruthTableOutputCell theme={props.theme}>Output</TruthTableOutputCell>
            </TruthTableHeader>
          </thead>
          <TruthTableBody colSpan={2} theme={props.theme}>
            <TruthTableCurrentRow current={!buttonState} theme={props.theme}>
              <td>0</td><TruthTableOutputCell theme={props.theme}>0</TruthTableOutputCell>
            </TruthTableCurrentRow>
            <TruthTableCurrentRow current={buttonState} theme={props.theme}>
              <td>1</td><TruthTableOutputCell theme={props.theme}>1</TruthTableOutputCell>
            </TruthTableCurrentRow>
          </TruthTableBody>
        </TruthTable>
      </div>
      <FlexRowDiv style={{ marginTop: '50px', width: '100vw', justifyContent: 'center' }}>
        <InputButton theme={props.theme} mobile={props.mobile} setActive={(active) => setButtonState(active)} />
        <HorizontalWire theme={props.theme} mobile={props.mobile} active={buttonState} style={{ width: props.mobile ? '50px' : '200px', marginTop: props.mobile ? '30px' : '76px' }} />
        <OutputLight theme={props.theme} mobile={props.mobile} isActive={buttonState} style={{ marginTop: props.mobile ? '17px' : '52px' }} />
      </FlexRowDiv>
    </>
  )
}

export default Wire;