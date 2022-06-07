import './Intro.scss'
import githubImg from '../../assets/img/github.png'
import linkedInImg from '../../assets/img/linkedin.png'
import instagramImg from '../../assets/img/instagram.png'
import vector1 from '../../assets/img/Vector1.png'
import vector2 from '../../assets/img/Vector2.png'
import boy from '../../assets/img/boy.png'
import crown from '../../assets/img/crown.png'
import thumb from '../../assets/img/thumbup.png'
import glassesEmoji from '../../assets/img/glassesimoji.png'
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import {ThemeContext} from '../../Context'
import {useContext, useEffect, useRef} from "react";
import {motion} from "framer-motion";
import {init} from 'ityped'
import {Link} from 'react-scroll'

const Intro = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  const transition = {duration: 2, type: 'spring'}
  const textRef = useRef()
  useEffect(() => {
    init(textRef.current,
      {
        showCursor: false,
        backDelay: 1500,
        strings: ['Tilek Talant Uulu', 'Web Developer']
      })
  }, [])
  return (
    <div className="intro" id='Intro'>
      <div className="intro-left">
        <div className="intro-left_name">
          <span className='intro-left_name_one' style={{color: darkMode ? 'white' : ''}}>Hi! I Am</span>
          <div className='intro-left_name_two'>
            <span ref={textRef}></span>
          </div>
          <span className='intro-left_name_three'>I create a web application and sites for you</span>
        </div>
        <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
          <button className="intro-left_button button">Hire me</button>
        </Link>
        <div className="intro-left-icons">
          <a href="https://github.com/Tilek0?tab=repositories">
            <img src={githubImg} alt="#"/>
          </a>
          <a href="https://www.linkedin.com/in/tilek-talant-uulu-aab343227">
            <img src={linkedInImg} alt="#"/>
          </a>
          <a href="https://www.instagram.com/tilek07/">
            <img src={instagramImg} alt="#"/>
          </a>
        </div>
      </div>
      <div className="intro-right">
        <img className='intro-right_img1' src={vector1} alt=""/>
        <img className='intro-right_img2' src={vector2} alt=""/>
        <img className='intro-right_img3' src={boy} alt=""/>
        <motion.img
          initial={{left: '-36%'}}
          whileInView={{left: '-24%'}}
          transition={transition}
          className='intro-right_img4'
          src={glassesEmoji} alt=""
        />
        <motion.div
          initial={{top: ' -1%', left: '78%'}}
          whileInView={{left: '60%'}}
          transition={transition}
          style={{position: 'absolute', zIndex: '2'}}
        >
          <FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
        </motion.div>
        <motion.div
          initial={{top: '23rem', left: '10rem'}}
          whileInView={{left: '-1rem'}}
          transition={transition}
          style={{position: 'absolute', zIndex: '2'}}
        >
          <FloatingDiv image={thumb} txt1='Best Design' txt2='Award'/>
        </motion.div>
        <div className='intro-right_blur' style={{background: 'rgb(238 210 255)'}}/>
        <div className='intro-right_blur' style={{
          background:
            '#c1f5ff', top: '16rem',
          height: '11rem', left: '-9rem'
        }}/>
      </div>
    </div>
  )
}
export default Intro