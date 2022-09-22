import styled from "styled-components";
import { FlexRowCenteredDiv } from "../../styles";

export const MultiPageTopContainer = styled(FlexRowCenteredDiv)((props) => ({
  width: '95%',
  background: props.theme === 'light' ? 'rgb(0 0 0 / 15%)' : 'rgb(255 255 255 / 15%)',
  margin: 'auto',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap'
}))

export const PageSelectButton = styled.div((props) => ({
  color: props.theme === 'light' ? 'black' : 'white',
  background: props.theme === 'light' ? 'white' : 'black',
  fontWeight: props.selected ? 'bolder' : '400',
  borderBottom: `solid 6px ${props.selected ? '#53a7ff' : props.theme === 'light' ? 'black' : 'white'}`,
  textAlign: 'center',
  padding: '10px 20px',

  flexGrow: '1',
  minWidth: '20%',

  '&:hover': {
    color: props.theme === 'light' ? 'white' : 'black',
    background: props.theme === 'light' ? 'black' : 'white',
  }
}))

