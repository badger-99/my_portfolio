import { FaX, FaGithub, FaGlobe } from 'react-icons/fa6';

const PopUp = ({popData, close}) => {
  const { Stack, Code, Demo } = popData;
  return (
    <div className='popup_elements'>
      <FaX onClick={() => close(false)} />
      <a href={Code} target='_blank'>
        <FaGithub />
      </a>
      <a href={Demo} target='_blank'>
        <FaGlobe />
      </a>
      <p>{Stack}</p>
    </div>
  );
};
export default PopUp;
