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
          <p>
            I enjoy creating front and back-end components that integrate
            seamlessly over a nice cup of coffee, and sometimes with some music
            playing in the background.
          </p>
          <p>
            My curiosity is among my stronger positive qualities. It's the
            reason I rarely walk away from something new without learning
            (about) it or attempting to do it, and it's the reason I got into
            programming.
          </p>
          <p>
            When I'm not dealing with code or reading, you'll most likely find
            me either trying or modifying a recipe, volunteering somewhere,
            enjoying a sci-fi film or show, or looking for a good rush that
            doesn't involve bugs and a hard deadline.
          </p>
          <Link to='/resume' id='link'>
            resumé
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
