import styled from 'styled-components'

export const RootElementContainer = styled.main`
  position: absolute;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
`
