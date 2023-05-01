import React, {useState} from "react";
import { FlexColumnDiv } from "../../../styles";
import {NeuralNetworkButton} from './NeuralNetworkStyles';
import DrawingCanvas from './components/DrawingCanvas';
import axios from 'axios';

const NeuralNetwork = (props) => {
  const [canvasDrawing, setCanvasDrawing] = useState();
  const [prediction, setPrediction] = useState();

  const canvasUpdate = (canvas)=>{
    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");
    tempCtx.drawImage(canvas, 0, 0, 150, 150, 0, 0, 28, 28);

    /* convert the canvas image */
    const img = tempCtx.getImageData(0, 0, 28, 28);

    /* remove the alpha channel and convert to grayscale */
    let sample = [];
    for (let i = 0, j = 0; i < img.data.length; i += 4, j++) {
      sample[j] = (img.data[i + 0] + img.data[i + 1] + img.data[i + 2]) / 3;
      // if the theme is dark, invert data
      if(props.theme !== 'light'){
        sample[j] = 255 - sample[j];
      }
    }
    console.log(sample)
    setCanvasDrawing(sample)
  }

  const onSubmit = async () =>{
    const prediction = await axios.post('http://localhost:9090/neural-network/predict',{
      predictData:canvasDrawing
    }).catch((err)=>{
      console.log(err)
      return {error: true}
    })
    console.log(prediction)
    setPrediction(prediction.error ? 'Error Occurred' : prediction.data.prediction)
  }
  
  return (
    <>
      <FlexColumnDiv>
        <h1>Learning Neural Networks - AI / ML</h1>
          <DrawingCanvas {...props} setCanvasDrawing={canvasUpdate}/>
          <NeuralNetworkButton {...props} onClick={onSubmit}>Submit</NeuralNetworkButton>
          <div>
          <h2>Prediction:</h2>
          <p style={{fontSize:'4em'}}>{prediction}</p>
          </div>
      </FlexColumnDiv>
    </>
  )
}

export default NeuralNetwork;