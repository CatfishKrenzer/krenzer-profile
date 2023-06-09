import styled from "styled-components";
import { FlexRowCenteredDiv, FlexColumnDiv } from "../../styles";

export const LandingHero = styled.div(props => ({
  height: props.mobile ? `calc(100vh - ${props.topMargin ? '300px' : '150px'})`: 'calc(100vh - 50px)',
  width:'100%',
  padding: props.mobile ? '150px 0': '0',
  backgroundImage: `url(${props.image})`,
  backgroundSize:'cover',
  backgroundPositionX: '20%',
  backgroundPositionY: '50%',
}));

export const LandingSubtitleBar = styled(FlexRowCenteredDiv)(props => ({
  width: '95vw',
  maxWidth: '650px',
  marginBottom: '30px',
  marginTop:'90px',
  fontSize: props.mobile ? '0.75em' : '1em',
  margin: '90px auto auto',
}));

LandingSubtitleBar.defaultProps = {
  mobile: false,
}