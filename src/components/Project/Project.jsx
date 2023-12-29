import { useState, useEffect } from 'react';
import PopUp from '../Mobile_Popup/PopUp';
import './project.scss'

const Project = (project) => {
  const { Cover, Title, Stack, Description, Demo, Code } = project;
  const popData = { Stack, Demo, Code };
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showPopUp, setShowPopUp] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    // Add the event listener when the component mounts
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openPopUp = () => {
    if (isMobile) {
      setShowPopUp(true);
    }
  };

  const closePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  return (
    <div className='project-box'>
      <div className='project' onClick={openPopUp}>
        <img src={Cover} alt={Title} className='screenshot' />
        <div className='project-details'>
          <h4 className='title'>{Title}</h4>
          <p className='description'>{Description}</p>
        </div>
      </div>
      {showPopUp && <PopUp popData={popData} close={closePopUp} />}
    </div>
  );
};
export default Project;
