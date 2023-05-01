
import React, {useRef, useEffect} from 'react'
import {NeuralNetworkSingleCanvas, NeuralNetworkButton} from '../NeuralNetworkStyles';

const DrawingCanvas = props => {
    const canvasRef = useRef(null);
    let coord = { x: 0, y: 0 };
    let canvas,context;

    useEffect(() => {
        canvas = canvasRef.current
        context = canvas.getContext('2d')
        context.fillStyle = props.theme !== 'light' ? '#FFFFFF':'#000000'
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)
        //   Drawing
        canvas.addEventListener("mousedown", start);
        canvas.addEventListener("mouseup", stop);
      }, [props.theme])

      const reposition = (event) => {
        coord.x = event.clientX - canvas.offsetLeft;
        coord.y = event.clientY - canvas.offsetTop;
      }
      const start = (event) => {
        document.addEventListener("mousemove", draw);
        reposition(event);
      }
      const stop = () => {
        document.removeEventListener("mousemove", draw);
        props.setCanvasDrawing(canvas)
      }
      const draw = (event) => {
        context.beginPath();
        context.lineWidth = 5;
        context.lineCap = "round";
        context.strokeStyle = props.theme === 'light' ? '#FFFFFF':'#000000';
        context.moveTo(coord.x, coord.y);
        reposition(event);
        context.lineTo(coord.x, coord.y);
        context.stroke();
      }
      const clear = () =>{
        canvas = canvasRef.current
        context = canvas.getContext('2d');
        const fillColor = props.theme === 'light' ? 0 : 255;
        context.clearRect(0, 0, canvas.width, canvas.height)

        context.fillStyle = fillColor;
        context.fillRect(0, 0, canvas.width, canvas.height)
      }
    return (
      <>
        <NeuralNetworkSingleCanvas ref={canvasRef} {...props} theme={props.theme} width={150} height={150} />
        <NeuralNetworkButton {...props} onClick={clear}>Clear</NeuralNetworkButton>
      </>
    )
}

export default DrawingCanvas