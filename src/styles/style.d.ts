import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      background: string
      hover: string
      text: string
      lineSelected: string
      selectionColor: string
    }
  }
}
