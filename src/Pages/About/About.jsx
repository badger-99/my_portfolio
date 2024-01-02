import { Link } from 'react-router-dom';
import './about.scss'

const About = () => {
  return (
    <section className='pages' id='about'>
      <div id="header">
      <h1>About Me</h1>
      <Link to='/resume' id='link'>My Resumé</Link>
      </div>

      <p>
        Hello there! My name is Alfred, but you can call me Al. When I'm not
        dealing with code or reading, you'll most likely find me either trying
        or modifying a recipe, volunteering somewhere, enjoying a
        sci-fi show or film, or looking for a good rush that doesn't
        involve bugs and a hard deadline.
      </p>
      <br />
      <p>Most of these activities will be conducted with background music and/or coffee.</p>
      <br />
    </section>
  );
};
export default About;
