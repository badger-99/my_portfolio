import { useEffect } from 'react';
import TagCloud from 'TagCloud';
// import './wordcloud.scss';

const WordCloud = () => {
  useEffect(() => {
    return () => {
      const container = '.tagcloud';
      const text = [
        'HTML',
        'CSS',
        'SASS',
        'JavaScript',
        'React',
        'Redux',
        'Ruby',
        'Ruby on Rails',
        'PostgreSQL',
        'Python',
        'Git',
        'GitHub',
        // 'Mobile First',
        // 'Responsive Design',
        // 'Remote Pair-Programming',
      ];

      const options = {
        radius: 150,
        maxSpeed: 'normal',
        initSpeed: 'fast',
        keep: true,
      };

      TagCloud(container, text, options);

      return () => {
      };
    };
  });

  return (
      <span className='tagcloud'></span>
  );
};
export default WordCloud;
