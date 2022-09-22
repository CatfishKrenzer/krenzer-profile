import styled from "styled-components";
import { FlexRowCenteredDiv } from "../../styles";

export const LandingSubtitleBar = styled(FlexRowCenteredDiv)(props => ({
  width: '95vw',
  maxWidth: '650px',
  marginBottom: '30px',
  fontSize: props.mobile ? '0.75em' : '1em',
}));

LandingSubtitleBar.defaultProps = {
  mobile: false,
}