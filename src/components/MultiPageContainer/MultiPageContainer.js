import React, { useState } from "react";
import { FlexColumnDiv, FlexRowDiv } from "../../styles";
import { MultiPageTopContainer, PageSelectButton } from "./MultiPageContainerStyles";

const MultiPageContainer = (props) => {
  const [selectedElement, setSelectedElement] = useState(0);

  return (
    <>
      {/* Buttons */}
      <FlexRowDiv>
        <MultiPageTopContainer>
          {props?.pages?.map?.((page, index) => (
            <PageSelectButton theme={props.theme} selected={index === selectedElement} onClick={() => setSelectedElement(index)}>
              {page.name}
            </PageSelectButton>
          ))}
        </MultiPageTopContainer>
      </FlexRowDiv>

      {/* Content */}
      <FlexColumnDiv style={{ marginBottom: '100px' }}>
        {props?.pages?.[selectedElement].element}
      </FlexColumnDiv>
    </>
  )
}

export default MultiPageContainer;