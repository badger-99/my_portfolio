import type { ISourceOptions } from '@tsparticles/engine';

const snow: ISourceOptions = {
  name: 'Star',
  fullScreen: { enable: false },
  fpsLimit: 120,
  background: {
    color: 'none',
  },
  interactivity: {
    enable: false,
  },
  particles: {
    color: {
      value: '#fff',
    },
    links: {
      enable: false,
    },
    move: {
      enable: true,
      direction: 'bottom',
      random: true,
      speed: 2,
      straight: false,
    },
    number: {
      value: 200,
      density: {
        enable: false,
      },
    },
    opacity: {
      value: { min: 0.2, max: 1 },
    },
    rotate: {
      value: {
        min: 0,
        max: 360,
      },
      animation: {
        enable: false,
        speed: 5,
        sync: false,
      },
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 2 },
    },
    // wobble: {
    //   enable: true,
    //   // distance: 10,
    //   // speed: 10,
    // },
    // zIndex: {
    //   value: {
    //     min: 0,
    //     max: 100,
    //   },
    //   // opacityRate: 1,
    //   // sizeRate: 1,
    //   // velocityRate: 1,
    // },
  },
};
export default snow;
