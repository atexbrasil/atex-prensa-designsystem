import styled from 'styled-components'

const renderXPosition = ({ isNext }) => {
  if (isNext) return 'right: 0;'
  return 'left: 0;'
}

const renderYPosition = () => {
  // calc(50% - buttonHeight / 2 - buttonMargin)
  return 'top: calc(50% - 17px - 16px);'
}

export const Button = styled.button`
  background-color: #fff;
  border-radius: 2px;
  border: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 50px;
  margin: 16px;
  position: absolute;
  z-index: 10;
  outline: 1px solid black;
  ${renderXPosition};
  ${renderYPosition};
  &:focus {
    outline: 1px solid white;
    border: 1px solid black;
  }
`