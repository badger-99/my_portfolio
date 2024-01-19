// import { useEffect } from 'react';
// import TagCloud from 'TagCloud';

const WordCloud = () => {
  
  return (
    <canvas width='74' height='74' id='myCanvas'>
      <a href='#'>HTML</a>
      <a href='#'>CSS</a>
      <a href='#'>SASS</a>
      <a href='#'>JavaScript</a>
      <a href='#'>React</a>
      <a href='#'>Redux</a>
      <a href='#'>Ruby</a>
      <a href='#'>Ruby on Rails</a>
      <a href='#'>PostgreSQL</a>
      <a href='#'>Python</a>
      <a href='#'>Git</a>
      <a href='#'>GitHub</a>
    </canvas>
  );
};
export default WordCloud;




// useEffect(() => {
//   return () => {
//     const container = '.tagcloud';
//     let radii;
//     const text = [
//       'HTML',
//       'CSS',
//       'SASS',
//       'JavaScript',
//       'React',
//       'Redux',
//       'Ruby',
//       'Ruby on Rails',
//       'PostgreSQL',
//       'Python',
//       'Git',
//       'GitHub',
//       // 'Mobile First',
//       // 'Responsive Design',
//       // 'Remote Pair-Programming',
//     ];

//     const radiusValue = () => {
//       if (window.screen.width < 480) {
//         radii = 148;
//       } else {
//         radii = 200;
//       }
//       return radii;
//     };

//     const options = {
//       radius: radiusValue(),
//       maxSpeed: 'normal',
//       initSpeed: 'fast',
//       keep: true,
//     };

//     TagCloud(container, text, options);

//     return () => {};
//   };
// });
