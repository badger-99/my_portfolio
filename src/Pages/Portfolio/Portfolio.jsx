import Project from '../../components/Project/project';
import portfolioData from '../../data/portfolio.json'
import './portfolio.scss'

const Portfolio = () => {

    const renderPortfolio = (portfolio) => {
      return (
        <div id='projects'>
          {portfolio.map((project) => {
            return <Project key={project.id} {...project} />;
          })}
        </div>
      );
    };
  
  return (
    <section className='pages' id='portfolio'>
      <h1>My Projects</h1>
        {renderPortfolio(portfolioData.portfolio)}
    </section>
  );
};
export default Portfolio;
