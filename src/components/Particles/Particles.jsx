import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import snow from './Snow';

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(() => snow, []);

  if (init) {
    return (
      <Particles
        id='snow'
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};
export default ParticlesComponent;
