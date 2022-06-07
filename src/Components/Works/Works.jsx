import '../Services/Services.scss'
import './Works.scss'
import reactImg from '../../assets/img/react.png'
import VueImg from '@iconscout/react-unicons/icons/uil-vuejs'
import tsImg from '../../assets/img/typescript.png'
import reduxImg from '../../assets/img/redux.png'
import tailwindImg from '../../assets/img/tailwind.png'
import {ThemeContext} from '../../Context'
import {useContext} from "react";
import {motion} from "framer-motion";
import {Link} from 'react-scroll'

const Works = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="services">
      <div className="services-left">
        <span className='services-left_span1' style={{color: darkMode ? 'white' : ''}}>List of my used</span>
        <span className='services-left_span2'>STACK TECHNOLOGIES</span>
        <span className='services-left_span4'>
            Vuex, Redux, MobX, Git, Rest API, npm<br/>
            OOP, WebSocket/Socket IO,Vue2,Vue3, unit testing/Jest<br/>
            Next js, Bem, JWT, UI FrameWorks, pug, Class Component<br/>
            Sass/scss, Stylus, PostCss, adaptive layout, cross-browser layout<br/>
            self-organization skills, teamwork skills
        </span>
        <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
          <button className='button services-left_button'>Hire Me</button>
        </Link>
        <div className='blur services-left_blur' style={{background: '#abf1ff94'}}/>
      </div>
      <div className='right'>
        <motion.div
          initial={{rotate: 45}}
          whileInView={{rotate: 0}}
          viewport={{margin: '-40px'}}
          transition={{duration: 3.5, type: 'spring'}}
          className="right-mainCircle">
          <div className="right-mainCircle_secCircle one">
            <img src={reactImg} alt="#"/>
          </div>
          <div className="right-mainCircle_secCircle two">
            <VueImg size='4rem' color='#3cbd5a'/>
          </div>
          <div className="right-mainCircle_secCircle three">
            <img src={tsImg} alt="#"/>
          </div>
          <div className="right-mainCircle_secCircle four">
            <img src={reduxImg} alt="#"/>
          </div>
          <div className="right-mainCircle_secCircle five">
            <img src={tailwindImg} alt="#"/>
          </div>
        </motion.div>
        <div className='right-backCircle blueCircle'/>
        <div className='right-backCircle yellowCircle'/>
      </div>
    </div>
  )
}

export default Works