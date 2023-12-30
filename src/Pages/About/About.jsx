import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className='pages' id='about'>
      <h1>About Me</h1>
      <br />
      <Link to='/resume'>My Résumé</Link>
      <br />
      <br />
      <p>
        Hello there! My name is Alfred, but you can call me Al. I'm a full stack
        developer, and I especially enjoy engineering front and back-end
        components that integrate seamlessly.
      </p>
      <br />
      <p>
        I have a strong sence of curiosity and I find a perticular satisfaction
        in learning new things and putting them to use, or finding ways to
        improve old things whenever possible, and it's not limited to coding.
      </p>
      <br />
      <p>
        I listen to a lot of music, sometimes even when I'm coding. However,
        when I'm away from my computer, you'll most likely find me either trying
        a new recipe or modifying an old one, working out, volunteering
        somewhere, or looking for a good adrenaline rush that doesn't involve
        bugs and hard deadlines.
      </p>
    </section>
  );
};
export default About;
