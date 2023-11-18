const Project = ({Cover, Title, Description }) => {
  return (
    <div className='project'>
      <img src={Cover} alt={Title} className='screenshot' />
      <div className='project-details'>
        <h4 className='title'>{Title}</h4>
        <p className='description'>{Description}</p>
      </div>
    </div>
  );
};
export default Project