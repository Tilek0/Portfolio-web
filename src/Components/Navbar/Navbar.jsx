import './Navbar.scss'
import Toggle from "./toggle/toggle";
import {Link} from 'react-scroll'
import HamburgerMenu from "./HumburgerMenu/HumburgerMenu";
import {useState} from "react";

const Navbar = () => {
  const [navbar,setNavbar] = useState()
  const scrollHandle = () => {
    if (window.scrollY >= 120) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener('scroll', scrollHandle)
  return (
    <div className="wrapped" style={{background: navbar ? 'var(--gray)' : ''}}>
      <div className="wrapped-left">
        <div className="wrapped-left_name">Tilek</div>
        <Toggle/>
      </div>
      <div className="wrapped-right">
        <div className="wrapped-right_list">
          <ul>
            <Link spy={true} to='Intro' smooth={true} activeClass='activeClass'>
              <li>Home</li>
            </Link>
            <Link spy={true} to='Services' smooth={true} activeClass='activeClass'>
              <li>Services</li>
            </Link>
            <Link spy={true} to='Experience' smooth={true} activeClass='activeClass'>
              <li>Experience</li>
            </Link>
            <Link spy={true} to='Portfolios' smooth={true} activeClass='activeClass'>
              <li>Portfolios</li>
            </Link>
            <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} to='Contact' smooth={true}>
          <button className="wrapped-right_button button">Contact</button>
        </Link>
        <div className='wrapped-right_mobMenu'>
          <HamburgerMenu/>
        </div>
      </div>
    </div>
  )
}

export default Navbar