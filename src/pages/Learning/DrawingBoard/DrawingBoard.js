import React, { useState, useEffect, useRef } from "react";
import { FlexColumnDiv, FlexRowDiv } from "../../../styles";
import { DrawingBoardButton, DrawingBoardSingleCanvas, DrawingBoardMarker } from './DrawingBoardStyles';

const DrawingBoard = (props) => {
  const [canvasDrawing, setCanvasDrawing] = useState();
  const [drawColor, setDrawColor] = useState('#000000');

  const canvasRef = useRef(null);
  let coord = { x: 0, y: 0 };
  let canvas, context;

  useEffect(() => {
    canvas = canvasRef.current
    context = canvas.getContext('2d')
    context.strokeStyle = drawColor
  }, [drawColor])

  const getCanvasWidth = () => {
    return (window.innerWidth * .9) > 1080 ? 1080 : window.innerWidth * .9
  }

  const getCanvasHeight = () => {
    const horizontal = window.innerWidth > window.innerHeight;
    return horizontal ? getCanvasWidth() / 2 : getCanvasWidth();
  }

  const canvasUpdate = (canvas) => {
    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");
    tempCtx.drawImage(canvas, 0, 0, 150, 150, 0, 0, 28, 28);

    /* convert the canvas image */
    const img = tempCtx.getImageData(0, 0, 28, 28);
    setCanvasDrawing(img.data)
  }

  useEffect(() => {
    canvas = canvasRef.current
    context = canvas.getContext('2d')
    context.fillStyle = 'white';
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)
    //   Drawing
    canvas.addEventListener("touchstart", start);
    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("touchend", stop);
    canvas.addEventListener("mouseup", stop);
  }, [props.theme])

  const reposition = (event) => {
    const clientX = (event?.targetTouches?.[0] ? event?.targetTouches?.[0]?.pageX : event?.changedTouches?.[event?.changedTouches?.length - 1]?.pageX) ?? event?.clientX;
    const clientY = (event?.targetTouches?.[0] ? event?.targetTouches?.[0]?.pageY : event?.changedTouches?.[event?.changedTouches?.length - 1]?.pageY) ?? event?.clientY;

    const boundingRect = canvas.getBoundingClientRect();
    coord.x = clientX - boundingRect.left;
    coord.y = clientY - boundingRect.top;
  }
  const start = (event) => {
    event.preventDefault();
    document.addEventListener("touchmove", draw);
    document.addEventListener("mousemove", draw);
    reposition(event);
  }
  const stop = (event) => {
    event.preventDefault();
    document.removeEventListener("touchmove", draw);
    document.removeEventListener("mousemove", draw);
    canvasUpdate(canvas)
  }
  const draw = (event) => {
    event.preventDefault()
    context.beginPath();
    context.lineWidth = 5;
    context.lineCap = "round";
    context.moveTo(coord.x, coord.y);
    reposition(event);
    context.lineTo(coord.x, coord.y);
    context.stroke();
  }
  const clear = () => {
    canvas = canvasRef.current
    context = canvas.getContext('2d');
    const fillColor = 'white';
    context.clearRect(0, 0, canvas.width, canvas.height)

    context.fillStyle = fillColor;
    context.fillRect(0, 0, canvas.width, canvas.height)
  }

  return (
    <>
      <FlexColumnDiv>
        <h1>Marker Board</h1>
        <DrawingBoardSingleCanvas ref={canvasRef} {...props} theme={props.theme} width={getCanvasWidth()} height={getCanvasHeight()} />
        <FlexRowDiv style={{flexWrap: 'wrap', justifyContent:'space-evenly'}}>
          <DrawingBoardMarker style={{ backgroundColor: 'black' }} onClick={() => {setDrawColor('#000000')}} />
          <DrawingBoardMarker style={{ backgroundColor: 'red' }} onClick={() =>setDrawColor('#FF0000')} />
          <DrawingBoardMarker style={{ backgroundColor: 'blue' }} onClick={() =>setDrawColor('#0000FF')} />
          <DrawingBoardMarker style={{ backgroundColor: 'green' }} onClick={() =>setDrawColor('#00FF00')} />
        </FlexRowDiv>
        <DrawingBoardButton {...props} onClick={clear}>Clear</DrawingBoardButton>
      </FlexColumnDiv>
    </>
  )
}

export default DrawingBoard;