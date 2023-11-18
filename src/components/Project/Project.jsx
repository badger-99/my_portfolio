import { useState, useEffect } from 'react';

const Project = (project) => {
  const { Cover, Title, Description } = project
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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

  const handleClick = () => {
    if (isMobile) {
      // Render or perform actions for mobile
      alert(Title);
    }
  };

  return (
    <div className='project' onClick={handleClick}>
      <img src={Cover} alt={Title} className='screenshot' />
      <div className='project-details'>
        <h4 className='title'>{Title}</h4>
        <p className='description'>{Description}</p>
      </div>
    </div>
  );
};
export default Project;
