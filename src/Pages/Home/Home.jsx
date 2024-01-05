import { Link } from 'react-router-dom';
import my_picture from '../../assets/my_picture.jpg'
import './home.scss';

const Home = () => {
  return (
    <section className='pages' id='home'>
      <div id='my_picture'>
        <img src={my_picture} alt='My Picture' />
      </div>
      <div>
        <div id='intro'>
          <h1>Hi,</h1>
          <h1>I'm Alfred.</h1>
          <h2>A Full Stack Developer.</h2>
        </div>
        <br />
        <p>
          I can help you build a product, feature, or website. Feel free to look
          through some of
          <Link to='/portfolio'> my work</Link>, and if you like what you see
          and have a project you need coded, don't hesitate to{' '}
          <Link to='/contact'> contact me</Link>.
        </p>
      </div>
    </section>
  );
};
export default Home;
