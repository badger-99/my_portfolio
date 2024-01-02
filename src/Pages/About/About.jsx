import { Link } from 'react-router-dom';
import './about.scss'

const About = () => {
  return (
    <section className='pages' id='about'>
      <div id='header'>
        <h1>About Me</h1>
        <Link to='/resume' id='link'>
          My Resumé
        </Link>
      </div>

      <p>
        I enjoy creating front and back-end components that integrate
        seamlessly over a nice cup of coffee, and sometimes with some music
        playing in the background. 
      </p>
      <br />
      <p>
        Among my positive qualities, my curiosity ranks high. It's the reason I can't walk away from something new without learning it or attempting to do it, and it's the reason I took an interest in programming.
      </p>
      <br />
      <p>
        When I'm not dealing with code or reading, you'll most likely find me
        either trying or modifying a recipe, volunteering somewhere, enjoying a
        sci-fi show or film, or looking for a good rush that doesn't involve
        bugs and a hard deadline.
      </p>
      <br />
    </section>
  );
};
export default About;
