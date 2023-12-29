import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className='pages' id='home'>
      <h1>Hi</h1>
      <h1>I'm Alfred</h1>
      <h2>A full stack developer</h2>
      <br />
      <p>
        I can help you build a product, feature, or website. Feel free to look
        through some of
        <Link to='/portfolio'> my work</Link>, and if you like what you see and
        have a project you need coded, don't hesitate to <Link to='/contact'> contact me</Link>.
      </p>
    </section>
  );
}
export default Home