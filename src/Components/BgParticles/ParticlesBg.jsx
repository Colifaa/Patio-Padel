import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo, useEffect, useState } from "react";
const ParticlesBg = (props) => {
  const [particleCount, setParticleCount] = useState(50);

  useEffect(() => {
    const updateParticleCount = () => {
      setParticleCount(Math.floor(window.innerWidth / 20));
    };

    updateParticleCount();

    window.addEventListener("resize", updateParticleCount);

    return () => {
      window.removeEventListener("resize", updateParticleCount);
    };
  }, []);

  const options = useMemo(() => {
    return {
      background: {
        color: "#F6F6F6",
      },
      fullScreen: {
        enable: true,
        zIndex: 0,
      },
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 50,
          },
          repulse: {
            distance: 80,
          },
        },
      },
      particles: {
        shape: {
          type: "images",
          options: {
            image: {
              src: ".png",
              width: "80vw",
              height: "80vw",
            },
          },
        },
        number: {
          value: particleCount,
        },
        color: {
          value: "#528caa",
        },
        links: {
          enable: true,
          distance: 200,
          color: {
            value: "#528caa",
          },
        },
        move: {
          enable: true,
          speed: { min: 1, max: 5 },
        },
        opacity: {
          value: { min: particleCount / 1, max: particleCount / 1 },
        },
        size: {
          value: { min: 15, max: 5 },
        },
      },
    };
  }, [particleCount]);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return (
    <div className="particles-container">
      <Particles id={props.id} init={particlesInit} options={options} />
    </div>
  );
};

export default ParticlesBg;