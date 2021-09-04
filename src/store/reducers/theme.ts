type ActionsTypes = 'SET_THEME'

export type Themes = 'Dark' | 'Brown' | 'Marine'
export const AVAILABLE_THEMES: Themes[] = ['Dark', 'Brown', 'Marine']

interface ActionsCreators {
  type: ActionsTypes
  paylaod: {
    theme: Themes
  }
}

const INITIAL_STATE: Themes = 'Dark'

const ThemeReducer = (
  state: Themes = INITIAL_STATE,
  action: ActionsCreators
) => {
  switch (action.type) {
    case 'SET_THEME':
      return action.paylaod.theme
    default:
      return state
  }
}

/**
 * Set a theme to be used by the user.
 * @param theme a theme, one of the following: `Dark`, `Brown` or `Marine`.
 * @returns {ActionsCreators} the `type` of this action, and a `payload` containing the same parameter value.
 */

export const setTheme = (theme: Themes): ActionsCreators => {
  return {
    type: 'SET_THEME',
    paylaod: {
      theme
    }
  }
}

export default ThemeReducer
