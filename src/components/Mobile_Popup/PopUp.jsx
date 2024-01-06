import { FaX, FaGithub, FaGlobe } from 'react-icons/fa6';
import './popUp.scss';

const PopUp = ({ popDat, closePop }) => {
  const { Stack, Code, Demo } = popDat;
  return (
    <div className='popup'>
      <FaX className='close-popup' onClick={closePop} />

      <div className='project-links'>
        <a className='project-code' href={Code} target='_blank'>
          <FaGithub /> <p>Code</p>
        </a>
        {Demo && (
          <a className='project-demo' href={Demo} target='_blank'>
            <FaGlobe /> <p>Demo</p>
          </a>
        )}
      </div>

      <p className='project-stack'>
        <span>Built with:</span>
        {Stack}
      </p>
    </div>
  );
};
export default PopUp;
