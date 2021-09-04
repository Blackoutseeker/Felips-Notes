import { FC, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Themes, AVAILABLE_THEMES, setTheme } from '../../store/reducers/theme'
import {
  HeaderContent,
  WindowButton,
  WindowButtonContent,
  Icon,
  OptionsContent,
  Options,
  OptionsText,
  List,
  ListItem
} from './style'
import Minimize from '../../assets/icons/window-minimize.svg'
import Maximize from '../../assets/icons/window-maximize.svg'
import Close from '../../assets/icons/times.svg'
const { invoke } = window.require('electron').ipcRenderer

interface HeaderProps {
  openFile: () => void
  saveFile: () => void
  saveFileAs: () => void
  setModal: (value: boolean) => void
}

const Header: FC<HeaderProps> = props => {
  const { openFile, saveFile, saveFileAs, setModal } = props
  const dispatch = useDispatch()

  const openFontSizeModal = () => {
    setModal(true)
  }

  const minimizeWindow = () => {
    invoke('minimize-window')
  }

  const resizeWindow = () => {
    invoke('resize-window')
  }

  const closeWindow = () => {
    invoke('close-window')
  }

  const changeTheme = useCallback(
    (theme: Themes) => {
      dispatch(setTheme(theme))
    },
    [dispatch]
  )

  const renderAvailableThemes = () =>
    AVAILABLE_THEMES.map(theme => (
      <ListItem key={theme} onClick={() => changeTheme(theme)}>
        {theme}
      </ListItem>
    ))

  return (
    <HeaderContent>
      <OptionsContent>
        <Options>
          <OptionsText>File</OptionsText>
          <List>
            <ListItem onClick={openFile}>Open... (Ctrl + O)</ListItem>
            <ListItem onClick={saveFile}>Save (Ctrl + S)</ListItem>
            <ListItem onClick={saveFileAs}>Save As...</ListItem>
          </List>
        </Options>
        <Options>
          <OptionsText>Font</OptionsText>
          <List>
            <ListItem onClick={openFontSizeModal}>Size</ListItem>
          </List>
        </Options>
        <Options>
          <OptionsText>Theme</OptionsText>
          <List>{renderAvailableThemes()}</List>
        </Options>
      </OptionsContent>
      <WindowButtonContent>
        <WindowButton onClick={minimizeWindow}>
          <Icon src={Minimize} alt="minimize" />
        </WindowButton>
        <WindowButton onClick={resizeWindow}>
          <Icon src={Maximize} alt="maximize" />
        </WindowButton>
        <WindowButton onClick={closeWindow} className={'close-button'}>
          <Icon src={Close} alt="close" />
        </WindowButton>
      </WindowButtonContent>
    </HeaderContent>
  )
}

export default Header
