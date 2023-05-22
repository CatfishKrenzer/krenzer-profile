import styled from "styled-components";

export const DrawingBoardSingleCanvas = styled.canvas(props => ({
    backgroundColor: 'white',
    borderRadius: '0px',
    border: 'solid 3px',
    maxWidth: '1080px',
  }))

export const DrawingBoardButton = styled.button(props =>({
    backgroundColor: props.theme === 'light' ? 'white' : 'black',
    borderColor: props.theme === 'light' ? '##006eff' : '#00fff8',
    color: props.theme === 'light' ? '#006eff' : '#00fff8',
    border: 'solid 3px',
    borderRadius: '20px',
    width: '150px',
    marginTop: '20px'
}))

export const DrawingBoardMarker = styled.div(props => ({
  width: '200px',
  height: '50px',
  margin: '40px 5px 5px 5px',
  border: 'solid 1px white'
}))