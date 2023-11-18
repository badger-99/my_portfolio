import portfolioData from '../../data/portfolio.json'
import './portfolio.scss'

const Portfolio = () => {

    const renderPortfolio = (portfolio) => {
      return (
        <div id='projects'>
          {portfolio.map((project) => {
            return (
              <div className='project' key={project.id}>
                <img
                  src={project.Cover}
                  alt={project.Title}
                  className='screenshot'
                />
                <div className='project-details'>
                  <h4 className='title'>{project.Title}</h4>
                  <p className='description'>{project.Description}</p>
                </div>
              </div>
            );
          })}
        </div>
      );
    };
  
  return (
    <section id='portfolio'>
      <h1>This is my work</h1>
        {renderPortfolio(portfolioData.portfolio)}
    </section>
  );
};
export default Portfolio;

{
  /* <div className='project-details'>
  <p className='title'>{project.Title}</p>
  <h4 className='description'>{project.Description}</h4>
  <button
    className='btn'
    onClick={() => window.open(project.Demo)}
  >
    View
  </button>
</div> */
}