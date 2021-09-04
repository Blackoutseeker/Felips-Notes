const INITIAL_STATE: number = 16

type ActionsTypes = 'SET_FONT_SIZE'

interface ActionsCreators {
  type: ActionsTypes
  payload: {
    fontSize: number
  }
}

const FontSizeReducer = (
  state: number = INITIAL_STATE,
  action: ActionsCreators
) => {
  switch (action.type) {
    case 'SET_FONT_SIZE':
      if (action.payload.fontSize >= 16 && action.payload.fontSize <= 30) {
        return action.payload.fontSize
      }
      return INITIAL_STATE
    default:
      return state
  }
}

/**
 * Set a font size to be used by the user.
 * @param {number} fontSize a number between `16` and `30`.
 * @returns {ActionsCreators} the `type` of this action, and a `payload` containing the same parameter value.
 */

export const setFontSize = (fontSize: number): ActionsCreators => {
  return {
    type: 'SET_FONT_SIZE',
    payload: {
      fontSize
    }
  }
}

export default FontSizeReducer
