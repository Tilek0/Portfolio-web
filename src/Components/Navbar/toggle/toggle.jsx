import './toggle.scss'
import SunImg from '@iconscout/react-unicons/icons/uil-sun'
import MoonImg from '@iconscout/react-unicons/icons/uil-moon'
import {ThemeContext} from "../../../Context";
import {useContext} from "react";
const Toggle = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  const handleToggle = () => {
    theme.dispatch({type: 'toggle'})
  }
  return (
    <div className='toggle' onClick={handleToggle}>
      <MoonImg />
      <SunImg />
      <div className="toggle-button"
           style={ darkMode ? {left: '2px'} : {right: '2px'}}
      >
      </div>
    </div>
  )
}

export default Toggle