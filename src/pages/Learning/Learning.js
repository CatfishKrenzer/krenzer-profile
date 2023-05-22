import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { FlexColumnDiv, FlexRowCenteredDiv } from "../../styles";

const logicAppImage = require('./LogicApp/app-image.png');
const neuralNetworkImage = require('./NeuralNetwork/app-image.jpg');
const drawingBoardImage = require('./DrawingBoard/app-image.jpg');


const projects = [{
    title: 'Learn Logic Gates',
    image: logicAppImage,
    text: 'An interactive application to help learn the basics about logic gates.',
    link: '/learning/logic-gates'
  },{
    title: 'Marker Board',
    image: drawingBoardImage,
    text: 'A marker board application to demonstrate the use of a canvas for drawing in both touchscreen and desktop browsers.',
    link: '/learning/marker-board'
  },{
    title: 'Neural Network',
    image: neuralNetworkImage,
    text: 'A Simple Neural Network application used to predict a number 0-9 based on drawn input',
    link: '/learning/neural-network'
  }
]

const Learning = (props) => {
  return (
    <>
      <FlexColumnDiv>
        <h1>Knowledge Sharing</h1>
        <p>
          This page will contain links to articles/applications both written by me and by others that I believe are valuable for sharing with others!
        </p>
        <FlexRowCenteredDiv>
          {projects.map((project, index) => <ProjectCard {...project} theme={props.theme} keyName={`learning-app-${index}`}/>)}
        </FlexRowCenteredDiv>
      </FlexColumnDiv>
    </>
  )
}

export default Learning;