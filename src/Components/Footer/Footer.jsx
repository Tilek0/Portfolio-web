import './Footer.scss'
import waveImg from '../../assets/img/wave.png'
import telegramWhiteImg from '../../assets/img/telegramWhite.png'
import GitHub from '@iconscout/react-unicons/icons/uil-github'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
const Footer = () => {
    return (
        <div className="footer">
          <img src={waveImg} alt="" style={{width: '100%', height: '25rem'}}/>
          <div className="footer-content">
            <span>tileken07@gmail.com</span>
            <span>+996507014645(WhatsApp)</span>
            <div className='footer-content_icons'>
              <a href="https://t.me/Tilek_07">
                <img src={telegramWhiteImg} alt="#" style={{width: '2.7rem', height: '2.7rem'}}/>
              </a>
              <a href="https://github.com/Tilek0?tab=repositories">
                <GitHub color='white' size='3rem' />
              </a>
              <a href="https://www.linkedin.com/in/tilek-talant-uulu-aab343227">
                <LinkedIn color='white' size='3rem' />
              </a>
            </div>
          </div>
        </div>
    )
}
export default Footer