import { useState, useEffect, useRef } from 'react';
import PopUp from '../Mobile_Popup/PopUp';
import './project.scss';

const Project = (project) => {
  const { Cover, Title, Stack, Description, Demo, Code, id } = project;
  const popData = { Stack, Demo, Code };
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1220);
  const [showPopUp, setShowPopUp] = useState(false);
  const projectRef = useRef(id);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1220);
  };

  // monitoring the screen width
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // closing popups on blur
  useEffect(() => {
    const handleClickOutside = (event) => {
      const linkClick = event.target.closest('a');
      if (
        projectRef.current &&
        !projectRef.current.contains(event.target) &&
        !linkClick
      ) {
        closePopUp();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const openPopUp = () => {
    if (isMobile) {
      setShowPopUp(true);
    }
  };

  const closePopUp = () => {
    setShowPopUp(false);
  };

  return (
    <div className='project-box'>
      <div className='project'>
        <img
          src={`${import.meta.env.BASE_URL}${Cover}`}
          alt={Title}
          className='screenshot'
          onClick={openPopUp}
          ref={projectRef}
        />
        <div className='project-details'>
          <h4 className='title'>{Title}</h4>
          <p className='description'>{Description}</p>
        </div>
        <div className={showPopUp? 'seen' : 'unseen'}>
          <PopUp popDat={popData} closePop={closePopUp} />
        </div>
      </div>
    </div>
  );
};
export default Project;
