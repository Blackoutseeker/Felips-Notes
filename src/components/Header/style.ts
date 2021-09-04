import styled from 'styled-components'

export const HeaderContent = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.secondary};
  -webkit-app-region: drag;
  z-index: 2;
`

export const WindowButtonContent = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-app-region: no-drag;
  .close-button:hover {
    background-color: #c00;
  }
`

export const WindowButton = styled.button`
  width: 30px;
  height: 100%;
  background-color: transparent;
  outline: none;
  border: none;
  display: grid;
  place-items: center;
  transition: 0.2s;
  :hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`

export const Icon = styled.img`
  width: 14px;
  height: 14px;
`

export const OptionsContent = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  display: flex;
  -webkit-app-region: no-drag;
`

export const Options = styled.button`
  outline: none;
  border: none;
  height: 100%;
  background-color: transparent;
  display: inline-block;
  padding-left: 15px;
  padding-right: 15px;
  transition: 0.2s;
  :hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
  :hover ul {
    display: block;
  }
`

export const OptionsText = styled.span`
  color: #fff;
  font-size: 14px;
  cursor: default;
`

export const List = styled.ul`
  position: absolute;
  display: none;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0px;
  list-style-type: none;
  transform: translate(-15px, -6px);
  text-align: start;
  box-shadow: 10px 10px #000;
  :hover {
    display: block;
  }
`

export const ListItem = styled.li`
  height: 25px;
  color: ${({ theme }) => theme.colors.lineSelected};
  font-size: 14px;
  padding: 0px 15px;
  padding-top: 5px;
  transition: 0.2s;
  :hover {
    color: #fff;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`
