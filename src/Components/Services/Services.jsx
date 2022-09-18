import './Services.scss'
import heartImg from '../../assets/img/heartemoji.png'
import glassesImg from '../../assets/img/glasses.png'
import humbleImg from '../../assets/img/humble.png'
import Card from "../Card/Card";
import {ThemeContext} from '../../Context'
import {useContext} from "react";
import {motion} from "framer-motion";

const Services = () => {
  const transition = {duration: 2, type: 'spring'}
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  let resume = "https://drive.google.com/file/d/1Iap6wRbvo9kwl7ciGzf6QEGtRKH_zkHG/view?usp=sharing"
  return (
    <div className="services" id='Services'>
      <div className="services-left">
        <span className='services-left_span1' style={{color: darkMode ? 'white' : ''}}>My Services,</span>
        <span className='services-left_span2'>About Me</span>
        <span className='services-left_span3'>
          Creating web applications<br/>
          and static sites
        </span>
        <a href={resume} download>
          <button className='button services-left_button'>Download CV</button>
        </a>
        <div className='blur services-left_blur' style={{background: '#abf1ff94'}}/>
      </div>
      <div className="services-right">
        <motion.div
          initial={{left: '0'}}
          whileInView={{left:  '27rem'}}
          transition={transition}
          style={{position: 'absolute'}}>
          <Card
            emoji={heartImg}
            heading={'Design'}
            detail={'Figma, Sketch, Photoshop'}
          />
        </motion.div>
        <motion.div
          initial={{left: '20rem', top: '8rem'}}
          whileInView={{left: '8rem'}}
          transition={transition}
          style={{position: 'absolute'}}>
          <Card
            emoji={glassesImg}
            heading={'Develop'}
            detail={'HTML, CSS, JS, Vue, React, TypeScript,ES-6'}
          />
        </motion.div>
        <motion.div
          initial={{left: '0', top: '21rem'}}
          whileInView={{left: '25rem' }}
          transition={transition}
          style={{position: 'absolute'}}>
          <Card
            emoji={humbleImg}
            heading={'About me'}
            detail={'name: Tilek, age: 27, from: Kyrgyzstan'}
          />
        </motion.div>
        <div className='services-right_blur' style={{background: 'rgb(238 210 255)'}} />
      </div>
    </div>
  )
}
export default Services