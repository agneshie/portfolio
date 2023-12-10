import Particles from 'react-tsparticles';
import { loadStarsPreset } from 'tsparticles-preset-stars';

const options = {
  fullScreen: {
    enable: false
  },
  preset: 'stars',
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    },
    move: {
      speed: 0.5
    },
    size: {
      value: 1
    }
  },
  background: {
    color: '#0a192f'
    //color: "#000000"
  }
};

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadStarsPreset(main);
  };

  return (
    <Particles
      options={options}
      init={particlesInit}
      width="100%"
      style={{ position: "absolute", inset: 0 }}
    />
  );
};

export default ParticlesBackground;