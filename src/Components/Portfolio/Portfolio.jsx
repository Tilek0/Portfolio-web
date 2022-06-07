import './Portfolio.scss'
import {ThemeContext} from '../../Context'
import {useContext} from "react";
import shopImg from '../../assets/img/shop.jpg'
import simonImg from '../../assets/img/simon-game.jpg'
import validImg from '../../assets/img/form.jpg'
import resumeImg from '../../assets/img/resume.png'

const Portfolio = () => {
  let allImg = [{img:shopImg,text: 'Online_shop',src: 'https://tilek-online-shop.netlify.app/'},
    {img:simonImg,text: 'Simon_Game',src: 'https://vue-simon-game.herokuapp.com/'},
    {img:validImg,text: 'Validation_Form',src: 'https://tilek-form.herokuapp.com/'},
    {img:resumeImg,text: 'First_HTML_CSS_Page',src: 'https://tilek0.github.io/Web-Resume/'}]
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="portfolio" id='Portfolios'>
      <span className='portfolio-one' style={{color: darkMode ? 'white' : ''}}>Recent Projects</span>
      <span className='portfolio-two'>Portfolio</span>
      <div className="portfolio-container">
        {allImg.map(item =>
          <div key={item.text} className='portfolio-container_item'>
            <a href={item.src}>
              <img src={item.img} alt="#"/>
            </a>
            <h3>{item.text}</h3>
          </div>
        )}

      </div>
      <div className='portfolio-blur1 blur' style={{background: 'var(--purple)'}}/>
      <div className='portfolio-blur2 blur' style={{background: 'skyblue'}}/>
    </div>
  )
}
export default Portfolio

