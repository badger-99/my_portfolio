import { Link } from 'react-router-dom';
import Cube from '../../components/cube/Cube';
import './skills.scss';

const Skills = () => {
  return (
    <section className='pages' id='skills'>
      <div id='header'>
        <h1>Skills</h1>
      </div>
      <div id='skills-content'>
        <div id='skills-list'>
          <div className='skill'>
            <h3>Front-end</h3>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>Redux</li>
              <li>HTML</li>
              <li>SCSS</li>
            </ul>
          </div>
          
          <div className='skill'>
            <h3>Back-end</h3>
            <ul>
              <li>Ruby</li>
              <li>Ruby On Rails</li>
              <li>Python</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          
          <div className='skill'>
            <h3>Tools & Methods</h3>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>Responsive/Mobile-first design</li>
            </ul>
          </div>
          <Link to='/portfolio' id='resume-link'>
            Projects
          </Link>
        </div>
        <div id='cube-section'>
          <Cube />
        </div>
      </div>
    </section>
  );
};
export default Skills;
