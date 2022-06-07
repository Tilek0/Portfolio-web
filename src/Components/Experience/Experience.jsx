import ExperienceNav from "./experienceNav/experienceNav";
import './Experience.scss'
const Experience = () => {
  return (
    <div className='experienceMain' id='Experience'>
      <ExperienceNav years='1.5+' txt='years' txt2='Experience' />
      <ExperienceNav years='5' txt='completed' txt2='Projects' />
      <ExperienceNav years='1' txt='companies' txt2='work' />
    </div>
  )
}
export default Experience