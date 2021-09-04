import { FC } from 'react'
import { Provider, useSelector } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor, StoreState } from './store'
import { ThemeProvider } from 'styled-components'
import DarkTheme from './styles/themes/dark'
import BrownTheme from './styles/themes/brown'
import MarineTheme from './styles/themes/marine'
import RootElement from './components/RootElement'

const ThemeWrapper = () => {
  const theme = useSelector((state: StoreState) => state.theme)

  const loadTheme = () => {
    switch (theme) {
      case 'Dark':
        return DarkTheme
      case 'Brown':
        return BrownTheme
      case 'Marine':
        return MarineTheme
      default:
        return DarkTheme
    }
  }

  return (
    <ThemeProvider theme={loadTheme()}>
      <RootElement />
    </ThemeProvider>
  )
}

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeWrapper />
      </PersistGate>
    </Provider>
  )
}

export default App
