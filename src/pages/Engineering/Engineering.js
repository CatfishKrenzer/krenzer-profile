import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { FlexColumnDiv, FlexRowCenteredDiv } from "../../styles";
const dropdownMenuImage = require('./Images/react-auto-dropdown-menu.png');

const projects = [{
  title: 'Reef Stable',
  image: 'https://d3s75gxst377ya.cloudfront.net/resources/Logo.png',
  text: 'A full web site dedicated to saltwater aquariums. This serverless website has a blog, calculators, parameter log book, store, and more. Reef Stable is an ongoing development and it the primary hub of Reef Stable, LLC.',
  link: 'https://reefstable.com'
},
{
  title: 'Dropdown Menu',
  image: dropdownMenuImage,
  text: 'The same dropdown menu used on this site and others I build! Available as an NPM Package or code via github.',
  link: 'https://github.com/CatfishKrenzer/react-auto-dropdown-menu'
}]
const Engineering = (props) => {
  return (
    <>
      <FlexColumnDiv>
        <h1>Engineering & Projects</h1>
        <p>
          This page will contain links and information about some of the projects I have worked on!
        </p>
        <FlexRowCenteredDiv>
          {projects.map(project => <ProjectCard {...project} theme={props.theme} />)}
        </FlexRowCenteredDiv>
      </FlexColumnDiv>
    </>
  )
}

export default Engineering;