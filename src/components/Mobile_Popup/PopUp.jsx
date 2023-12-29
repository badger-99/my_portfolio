import { FaX, FaGithub, FaGlobe } from 'react-icons/fa6';

const PopUp = ({popData, close}) => {
  const { Stack, Code, Demo } = popData;
  return (
    <div className='popup'>
      <FaX className='close-popup' onClick={() => close(false)} />

      <div className='project-links'>
        <a className='project-code' href={Code} target='_blank'>
          <FaGithub />
        </a>
        <a className='project-demo' href={Demo} target='_blank'>
          <FaGlobe />
        </a>
      </div>

      <p className='project-stack'><span>Built with:</span>{Stack}</p>
    </div>
  );
};
export default PopUp;
