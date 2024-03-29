import { Link } from 'react-router-dom';
import WordCloud from '../../components/Word_Cloud/wordCloud';
import './about.scss';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    let options = {
      textColour: '#ebebeb',
      textHeight: 32,
      depth: 0.5,
      initial: [1.0, -0.33],
      maxSpeed: 0.015,
      minSpeed: 0.2,
      noSelect: true,
    };

    try {
      TagCanvas.Start('myCanvas', '', options);
    } catch (e) {
      // something went wrong, handle the error or hide the canvas container
      document.getElementById('myCanvas').style.display = 'none';
    }
  }, []);

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
        <div id='canvasContainer'>
          <WordCloud />
        </div>
      </div>
    </section>
  );
};
export default About;
