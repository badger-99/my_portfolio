import './cube.scss'

const Cube = () => {
  return (
    <div className='stage-cube-cont'>
      <div className='cube-spinner'>
        <div className='face1'>
          <i class='devicon-javascript-plain colored'></i>
        </div>

        <div className='face2'>
          <i class='devicon-react-original colored'></i>
        </div>

        <div className='face3'>
          <i class='devicon-redux-original colored'></i>
        </div>

        <div className='face4'>
          <i class='devicon-ruby-plain colored'></i>
        </div>

        <div className='face5'>
          <i class='devicon-rails-plain colored'></i>
        </div>

        <div className='face6'>
          <i class='devicon-postgresql-plain colored'></i>
        </div>
      </div>
    </div>
  );
};
export default Cube;
