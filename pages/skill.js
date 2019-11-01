import 'semantic-ui-css/semantic.min.css'
import Title from '../components/title'
import '../css/skill.css'
import $ from 'jquery';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import Skills from '../resources/career.json'

const SkillTimeLine = ({stars}) => {
    const itemClick = e => {
        console.log('test2!');
        $(this).css('width', '600rem');
    }

    return (<div>
    <Title>
      Careers.
    </Title>
            

    <div id="container">
		<div id="thumbs">
    {Skills.map(job=>(
      <div className="history-block" >
      <div className="cover" onClick={itemClick}> </div>
      <div className="year">{job.start} - {job.end}</div>
      <div className="title">
        <h3>{job.company}</h3>
        <h5>{job.position} / {job.rank}</h5>
        <h5>- {job.description}</h5>
      </div>
      <div className="skill">
        {job.skills.map(skill=>(
          <div className="child" data-tooltip-text={skill}>
            <img src={`/${skill}.png`}/>            
          </div>
        ))}
      </div>
    </div>
    ))}
		</div>
	</div>
    </div>);
};

export default SkillTimeLine;