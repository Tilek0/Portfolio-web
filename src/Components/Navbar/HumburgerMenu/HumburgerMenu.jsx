import './HumburgerMenu.scss'
import {ThemeContext} from "../../../Context";
import {useContext} from "react";
const HamburgerMenu = () => {
  const theme = useContext(ThemeContext)
  const menuOpen = theme.state.menuOpen
  let toggleMenu = () => {
    theme.dispatch({type: 'toggleMenu'})
  }
    return (
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span />
            <span />
            <span />
        </div>
    )
}
export default HamburgerMenu