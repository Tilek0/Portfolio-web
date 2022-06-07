import './Card.scss'
const Card = ({emoji,heading,detail,onHandle}) => {
  return (
    <div className='card'>
      <img src={emoji} alt=""/>
      <span>{heading}</span>
      <span>{detail}</span>
    </div>
  )
}
export default Card