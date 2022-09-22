import React from "react";
import { ProjectCardContainer } from "./ProjectCardStyles";

const ProjectCard = (props) => {
  return (
    <>
      <div>
        <a href={props.link}>
          <ProjectCardContainer theme={props.theme}>
            <h2>{props.title}</h2>
            {props.image && <img src={props.image} alt={props.title}></img>}
            <p>{props.text}</p>
          </ProjectCardContainer>
        </a>
      </div>
    </>
  )
}

export default ProjectCard;