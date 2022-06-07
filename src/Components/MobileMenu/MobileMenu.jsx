import './MobileMenu.scss'
import {Link} from "react-scroll";
const MobileMenu = () => {
  return (
    <div className='mobile'>
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
  )
}
export default MobileMenu