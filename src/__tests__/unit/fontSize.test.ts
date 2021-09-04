import FontSizeReducer, { setFontSize } from '../../store/reducers/fontSize'

describe('Testing methods from "fontSize" module', () => {
  test('Should return 16 (default value) if an integer passed as an argument is less than 16', () => {
    const defaultFontSize = 16
    const badFontSize = 0
    const fontSize = FontSizeReducer(badFontSize, setFontSize(badFontSize))
    expect(fontSize).toBe(defaultFontSize)
  })

  test('Should return 16 (default value) if an integer passed as an argument is greater than 30', () => {
    const defaultFontSize = 16
    const badFontSize = 40
    const fontSize = FontSizeReducer(badFontSize, setFontSize(badFontSize))
    expect(fontSize).toBe(defaultFontSize)
  })

  test('Should return the same integer passed as an argument', () => {
    const preferredFontSize = 22
    const initialFontSize = 16
    const fontSize = FontSizeReducer(
      initialFontSize,
      setFontSize(preferredFontSize)
    )
    expect(fontSize).toBe(preferredFontSize)
  })
})
