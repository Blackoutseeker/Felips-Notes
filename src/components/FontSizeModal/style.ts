import styled from 'styled-components'

export const ModalHolder = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: grid;
  place-items: center;
`

export const ModalInput = styled.input`
  width: 130px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.secondary};
  outline: none;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  cursor: default;
  ::selection {
    background-color: transparent;
  }
`
