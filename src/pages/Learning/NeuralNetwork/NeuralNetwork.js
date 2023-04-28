import React from "react";
import { FlexColumnDiv } from "../../../styles";
import DrawingCanvas from './components/DrawingCanvas';
const NeuralNetwork = (props) => {
  return (
    <>
      <FlexColumnDiv>
        <h1>Learning Neural Networks - AI / ML</h1>
        <div id="outer">
          <DrawingCanvas {...props}/>
        </div>
      </FlexColumnDiv>
    </>
  )
}

export default NeuralNetwork;