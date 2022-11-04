import styled from "styled-components";

export const SummaryContainer = styled.div(props => ({
    margin: '50px 10px',

    // Make the summary look/fit on a piece of paper
    border: `2px solid ${props.theme === 'light'?'black':'white'}`,
    aspectRatio: '8.5 / 11',
}))