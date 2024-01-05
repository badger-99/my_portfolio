import './cube.scss'

const Cube = () => {
  return (
    <div id='cube-container'>
      <div className='cube-spinner'>
        <div className='face1'>
          <i className='devicon-javascript-plain colored'></i>
        </div>

        <div className='face2'>
          <i className='devicon-react-original colored'></i>
        </div>

        <div className='face3'>
          <i className='devicon-redux-original colored'></i>
        </div>

        <div className='face4'>
          <i className='devicon-ruby-plain colored'></i>
        </div>

        <div className='face5'>
          <i className='devicon-rails-plain colored'></i>
        </div>

        <div className='face6'>
          <i className='devicon-postgresql-plain colored'></i>
        </div>
      </div>
    </div>
  );
};
export default Cube;
