import styled from "styled-components";

export const NeuralNetworkSingleCanvas = styled.canvas(props => ({
    width: '150px',
    height:'150px',
    backgroundColor: props.theme === 'light' ? 'black' : 'white',
  }))
