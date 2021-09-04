import ThemeReducer, { Themes, setTheme } from '../../store/reducers/theme'

describe('Testing methods from "theme" module', () => {
  test('Should return "Dark" theme by default', () => {
    const darkTheme: Themes = 'Dark'
    const theme = ThemeReducer(darkTheme, setTheme(darkTheme))
    expect(theme).toBe(darkTheme)
  })

  test('Should return the same theme passed as argument', () => {
    const defaultTheme: Themes = 'Dark'
    const brownTheme: Themes = 'Brown'
    const theme = ThemeReducer(defaultTheme, setTheme(brownTheme))
    expect(theme).toBe(brownTheme)
  })
})
