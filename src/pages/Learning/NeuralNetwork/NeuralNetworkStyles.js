import styled from "styled-components";

export const NeuralNetworkSingleCanvas = styled.canvas(props => ({
    width: '150px',
    height:'150px',
    backgroundColor: props.theme === 'light' ? 'black' : 'white',
    borderRadius: '20px',
  }))

export const NeuralNetworkButton = styled.button(props =>({
    backgroundColor: props.theme === 'light' ? 'white' : 'black',
    borderColor: props.theme === 'light' ? '##006eff' : '#00fff8',
    color: props.theme === 'light' ? '#006eff' : '#00fff8',
    border: 'solid 3px',
    borderRadius: '20px',
    width: '150px',
    marginTop: '20px'
}))