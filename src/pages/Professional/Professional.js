import React from "react";
import { FlexColumnDiv, FlexRowCenteredDiv } from "../../styles";
import Summary from "./components/Summary";

const Professional = (props) => {
  return (
    <>
      <FlexColumnDiv>
        <h1>Professional Summary</h1>
        <p>
          This page is a professional summary generated by reading my LinkedIn profile and creating the below result
        </p>
        <Summary theme={props.theme} />
      </FlexColumnDiv>
    </>
  )
}

export default Professional;