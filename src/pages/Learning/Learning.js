import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { FlexColumnDiv, FlexRowCenteredDiv } from "../../styles";

const logicAppImage = require('./LogicApp/app-image.png');

const projects = [{
    title: 'Learn Logic Gates',
    image: logicAppImage,
    text: 'An interactive application to help learn the basics about logic gates.',
    link: '/learning/logic-gates'
  },{
    title: 'Neural Network',
    image: logicAppImage,
    text: 'Neural Network Interface',
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
          {projects.map(project => <ProjectCard {...project} theme={props.theme} />)}
        </FlexRowCenteredDiv>
      </FlexColumnDiv>
    </>
  )
}

export default Learning;