import styled from "styled-components";

const greenBackground = 'linear-gradient(135deg,rgb(127 224 114) 0%,rgba(0,128,5,1) 40%,rgb(24 167 6) 100%)';
const redBackground = 'linear-gradient(135deg, rgba(255,174,174,1) 0%, rgba(140,0,0,1) 40%, rgba(150,65,65,1) 100%)';

export const LogicButtonOuterCircle = styled.div((props) => ({
  borderRadius: '100%',
  width: props.mobile ? '65px' : '150px',
  height: props.mobile ? '65px' : '150px',
  border: '1px solid',
  borderColor: 'black',
  background: 'radial-gradient(circle, rgba(255,255,255,1) 30%, rgba(0,0,0,1) 100%)',
  overflow: 'auto'
}))

export const LogicButtonInnerCircle = styled.div((props) => ({
  borderRadius: '100%',
  border: props.mobile ? '1px solid' : '2px solid',
  margin: props.mobile ? '6px' : '10px',
  borderColor: 'black',
  width: props.mobile ? '50px' : '125px',
  height: props.mobile ? '50px' : '125px',
  background: props.active ? greenBackground : redBackground,
  boxShadow: props.mobile ? '1px 1px black' : '3px 3px black',
  '&:active': {
    boxShadow: `0px 0px ${props.theme === 'dark' ? 'black' : 'white'}`,
    border: '1px solid',
    borderColor: 'black',
    margin: props.mobile ? '7px 6px 6px 7px' : '12px 10px 10px 12px',
  }
}))

export const LedOutput = styled.div((props) => ({
  width: props.mobile ? '25px' : '50px',
  height: props.mobile ? '35px' : '70px',
  // background: props.active ? greenBackground : redBackground,
  borderRadius: `${props.mobile ? '25px 25px 3px 3px' : '50px 50px 6px 6px'}`,
  backgroundColor: props.active ? '#24E0FF' : '#a2a2a2',
  // borderRadius: '50%',
  boxShadow: `rgba(0, 0, 0, 0.2) ${props.mobile ? '0 -1px 7px 1px' : '0 -2px 14px 2px'}, inset ${props.active ? '#006' : '#000'} ${props.mobile ? '0 -1px 9px' : '0 -2px 18px'}${props.active ? `, #3F8CFF ${props.mobile ? '0 2px 14px' : '0 4px 28px'}` : ''}`,
}))

export const LedOutputTop = styled(LedOutput)((props) => ({
  width: props.mobile ? '25px' : '50px',
  height: props.mobile ? '25px' : '50px',
  borderRadius: '100%'
}))

export const HorizontalWire = styled.div((props) => ({
  borderTop: `2px solid ${props.active ? '#24E0FF' : (props.theme === 'light' ? 'black' : 'white')}`,
}))

export const BendDownWire = styled.div((props) => ({
  borderTop: `2px solid ${props.active ? '#24E0FF' : (props.theme === 'light' ? 'black' : 'white')}`,
  borderRight: `2px solid ${props.active ? '#24E0FF' : (props.theme === 'light' ? 'black' : 'white')}`
}))

export const BendUpWire = styled.div((props) => ({
  borderBottom: `2px solid ${props.active ? '#24E0FF' : (props.theme === 'light' ? 'black' : 'white')}`,
  borderRight: `2px solid ${props.active ? '#24E0FF' : (props.theme === 'light' ? 'black' : 'white')}`
}))

export const NotGateTriangle = styled.div((props) => ({
  width: '0',
  height: '0',
  borderTop: `${props.mobile ? '30' : '60'}px solid transparent`,
  borderBottom: `${props.mobile ? '30' : '60'}px solid transparent`,
  borderLeft: `${props.mobile ? '50' : '100'}px solid ${props.theme === 'light' ? 'black' : 'white'}`,
  color: props.theme === 'dark' ? 'black' : 'white',
  'p': {
    margin: props.mobile ? '-5px 0 0 -42px' : '-7px 0 0 -82px',
    fontSize: props.mobile ? '.75em' : '1.5em',
  }
}))
export const NotGateCircle = styled.div((props) => ({
  width: props.mobile ? '13px' : '26px',
  height: props.mobile ? '13px' : '26px',
  marginLeft: props.mobile ? '-5px' : '-10px',
  background: props.theme === 'light' ? 'black' : 'white',
  borderRadius: '100%'
}))

export const Gate = styled.img((props) => ({
  marginTop: `${props.mobile ? '6' : '26'}px`,
  height: `${props.mobile ? '50' : '100'}px`,
  color: props.theme === 'dark' ? 'black' : 'white',
}))