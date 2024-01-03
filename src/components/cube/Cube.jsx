import './cube.scss'

const Cube = () => {
  return (
    <div className='stage-cube-cont'>
      <div className='cube-spinner'>
        <div className='face1'>
          <FontAwesomeIcon icon={} color='#f06529' />
        </div>

        <div className='face2'>
          <FontAwesomeIcon icon={} color='#28a4d9' />
        </div>

        <div className='face3'>
          <FontAwesomeIcon icon={} color='#efd81d' />
        </div>

        <div className='face4'>
          <FontAwesomeIcon icon={} color='#5ed4f4' />
        </div>

        <div className='face5'>
          <FontAwesomeIcon icon={} color='#ec4d28' />
        </div>

        <div className='face6'>
          <FontAwesomeIcon icon={} color='#c69' />
        </div>
      </div>
    </div>
  );
};
export default Cube;
