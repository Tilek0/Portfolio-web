import {createContext, useReducer} from 'react'

export const ThemeContext = createContext()

const initialState = {
  darkMode : false,
  menuOpen: false
}
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'toggle':
      return {
        ...state,darkMode: !state.darkMode
      }
    case 'toggleMenu':
      return {
        ...state,menuOpen: !state.menuOpen
      }
    default:
      return state

  }
}
export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState)
  return (
    <ThemeContext.Provider value={{state, dispatch}}>
      {props.children}
    </ThemeContext.Provider>
  )
}