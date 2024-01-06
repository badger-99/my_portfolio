import { Link } from 'react-router-dom';
import my_picture from '../../assets/my_picture.jpg';
import './home.scss';

const Home = () => {
  return (
    <section className='pages' id='home'>
      <div id='my_picture'>
        <img src={my_picture} alt='My Picture' />
      </div>
      <div id='hero-text'>
        <div id='intro'>
          <h1>Hi,</h1>
          <h1>I'm Alfred.</h1>
          {/* <h2>A Full Stack Developer.</h2> */}
        </div>
        <div id='typing-svg'>
          <a href='https://git.io/typing-svg'>
            <img
              src='https://readme-typing-svg.demolab.com?font=DM+Mono&weight=500&size=28&duration=4000&pause=1000&color=FFFFFF&center=true&random=false&width=375&lines=Front-end+Fixer;Back-end+Builder;Full+Stack+Developer'
              alt='Typing SVG'
            />
          </a>
        </div>
        <div id='links'>
          <Link className='hero-link' to='/about'>
            about me
          </Link>
          <Link className='hero-link' to='/portfolio'>
            my work
          </Link>
          <Link className='hero-link' to='/contact'>
            talk to me
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Home;
