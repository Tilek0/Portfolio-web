import './experienceNav.scss'
const ExperienceNav = ({years,txt,txt2}) => {
  return (
    <div className="experience">
      <div className="experience-circle">{years}</div>
      <span>{txt}</span>
      <span>{txt2}</span>
    </div>
  )
}
export default ExperienceNav