import styled from "styled-components";
import { FlexRowDiv } from "../../styles";
import DropdownMenu from '@catfishkrenzer/react-auto-dropdown-menu';

export const ThemeButton = styled.div(props => ({
  marginLeft: 'auto',
  marginRight: '10px',
  'label': {
    marginRight: '5px',
  }
}));

export const HeaderContainer = styled(FlexRowDiv)({
  padding: '10px',
})

export const DropdownMenuButton = styled.a({
  display: 'block',
  height: '42px',
  paddingTop: '13px',
  width: '100%',
  fontSize: '1.5em',
  textAlign: 'left',
})

export const CustomDropdownMenu = styled(DropdownMenu)(props => ({
  left: '0px',
  width: '75vw',
  height: '100vh',
  textAlign: 'left',
  maxWidth: '500px',
  backgroundColor: props.theme === 'light' ? 'white' : 'black',
  color: props.theme === 'light' ? 'black' : 'white',
}))