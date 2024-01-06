import Particles from '../../components/Particles/Particles';
import './cube.scss';

const Cube = () => {
  return (
    <div id='cube-container'>
      <div id='cube-spinner'>
        <div className='faces' id='face1'>
          <i className='devicon-javascript-plain colored'></i>
        </div>

        <div className='faces' id='face2'>
          <i className='devicon-react-original colored'></i>
        </div>

        <div className='faces' id='face3'>
          <i className='devicon-redux-original colored'></i>
        </div>

        <div className='faces' id='face4'>
          <i className='devicon-ruby-plain colored'></i>
        </div>

        <div className='faces' id='face5'>
          <i className='devicon-rails-plain colored'></i>
        </div>

        <div className='faces' id='face6'>
          <i className='devicon-postgresql-plain colored'></i>
        </div>
      </div>
      <div id='shadow'></div>
      <Particles />
    </div>
  );
};
export default Cube;
