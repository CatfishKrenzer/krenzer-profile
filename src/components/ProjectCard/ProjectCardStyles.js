import styled from "styled-components";
import { FlexColumnDiv } from "../../styles";

export const ProjectCardContainer = styled(FlexColumnDiv)(props => ({
  maxWidth: '500px',
  width: '85%',
  borderBottom: 'solid 6px #66fcf1',
  boxShadow: '15px 15px 10px 1px rgba(102, 253, 241, 50%)',
  background: props.theme === 'dark' ? '#262626' : '#d4d4d4',
  paddingBottom: '30px',
  justifyContent: "center",
  margin: '20px auto 0',
  '& > *': {
    margin: '20px auto',
  },
  '& > p': {
    textAlign: 'center'
  },
  '& > img': {
    width: '90%',
  },
  '&:hover': {
    filter: 'brightness(125%)',
    transform: 'scale(1.05)',
    transition: ' all ease 500ms',
  }
}))