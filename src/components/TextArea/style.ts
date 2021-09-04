import styled from 'styled-components'

interface Style {
  fontSize: number
}

export const TextAreaInput = styled.textarea`
  width: 100%;
  min-height: 90%;
  background-color: transparent;
  resize: none;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${(style: Style) => style.fontSize}px;
  font-family: Arial, Helvetica, sans-serif;
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 12px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  ::selection {
    background-color: ${({ theme }) => theme.colors.selectionColor};
  }
`
