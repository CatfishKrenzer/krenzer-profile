import styled from "styled-components";

export const TruthTable = styled.table((props) => ({
  textAlign: 'center',
  borderColor: props.theme === 'light' ? 'black' : 'white',
  border: 'none',
  borderCollapse: 'collapse',

  'td': {
    textAlign: 'center',
    width: '75px'
  }
}))

export const TruthTableHeader = styled.tr((props) => ({
  borderBottom: '3px solid',
  borderColor: props.theme === 'light' ? 'black' : 'white',
  fontWeight: 'bold',
}))

export const TruthTableBody = styled.tbody((props) => ({
  '& > tr': {
    borderBottom: '1px solid',
    borderColor: props.theme === 'light' ? 'black' : 'white',
  }
}))

export const TruthTableCurrentRow = styled.tr((props) => ({
  backgroundColor: `rgba(${props.theme === 'light' ? '0,0,0' : '255,255,255'},${props.current ? '0.2' : '0.0'})`
}))

export const TruthTableOutputCell = styled.td((props) => ({
  borderLeft: '1px solid',
  borderColor: props.theme === 'light' ? 'black' : 'white',
}))

