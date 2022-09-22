import styled from "styled-components";

export const AppStyleMain = styled.div(props => ({
  margin: 0,
  justifyContent: 'flex-start',
  minHeight: '100vh',
  backgroundColor: props.theme === 'light' ? 'white' : 'black',
  '& > *': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: props.theme === 'light' ? 'black' : 'white',
  },
  'h1, h2, h3, h4': {
    fontFamily: 'Electrolize',
    fontSize: props.mobile ? '2em' : '3em',
    textAlign: 'center'
  },
  'span': {
    fontFamily: 'Special Elite',
  },
  'p': {
    width: '85%',
    maxWidth: '1000px',
    fontFamily: 'Special Elite',
    textAlign: 'center',
    'a:hover': {
      textDecoration: 'underline',
      fontWeight: 'bold'
    }
  },
  'a': {
    color: props.theme === 'light' ? 'black' : 'white',
    textDecoration: 'none',
  },
}))

AppStyleMain.defaultProps = {
  theme: 'dark',
  mobile: 'false',
}


export const FlexColumnDiv = styled.div({
  display: 'flex',
  flexDirection: 'column',
})

export const FlexRowDiv = styled.div({
  display: 'flex',
  flexDirection: 'row',
})

export const FlexRowCenteredDiv = styled(FlexRowDiv)({
  justifyContent: 'space-evenly',
})
