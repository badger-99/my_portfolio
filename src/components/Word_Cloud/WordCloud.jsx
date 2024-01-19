import { useEffect } from 'react';
import TagCloud from 'TagCloud';
// import './wordcloud.scss';

const WordCloud = () => {
  useEffect(() => {
    return () => {
      const container = '.tagcloud';
      let radii;
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

      const radiusValue = () => {
        if (window.screen.width < 480) {
          radii = 148;
        } else {
          radii = 200;
        }
        return radii;
      };

      const options = {
        radius: radiusValue(),
        maxSpeed: 'normal',
        initSpeed: 'fast',
        keep: true,
      };

      TagCloud(container, text, options);

      return () => {};
    };
  });

  return <span className='tagcloud'></span>;
};
export default WordCloud;
