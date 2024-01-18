import { Link } from 'react-router-dom';
import './about.scss';

const About = () => {
  return (
    <section className='pages' id='about'>
      <div id='header'>
        <h1>About Me</h1>
      </div>
      <div id='about-content'>
        <div id='text'>
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
          <Link to='/skills' id='link'>
            Skills
          </Link>
        </div>
        <div id='canvas'>
        </div>
      </div>
    </section>
  );
};
export default About;
