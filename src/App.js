import React, { useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';
import './styles/animations.css';
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Router>
      <div className="app">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              opacity: 0
            },
            particles: {
              number: {
                value: 140,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: ["#ffffff", "#cce4ff", "#99c2ff"]
              },
              shape: {
                type: "circle"
              },
              opacity: {
                value: 0.6,
                random: false,
                anim: {
                  enable: true,
                  speed: 0.5,
                  opacity_min: 0.3,
                  sync: false
                }
              },
              size: {
                value: 3.5,
                random: {
                  enable: true,
                  minimumValue: 2
                },
                animation: {
                  enable: true,
                  speed: 2,
                  minimumValue: 2,
                  sync: false
                }
              },
              links: {
                enable: true,
                distance: 140,
                color: "#99c2ff",
                opacity: 0.4,
                width: 1.2
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                outModes: "out",
                warp: true,
                attract: {
                  enable: true,
                  rotateX: 2000,
                  rotateY: 2000
                }
              },
              wobble: {
                enable: true,
                distance: 8,
                speed: 8
              },
              zIndex: {
                value: 0,
                opacityRate: 0.5
              }
            },
            interactivity: {
              detectsOn: "canvas",
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse"
                },
                onClick: {
                  enable: true,
                  mode: "push"
                },
                resize: true
              },
              modes: {
                repulse: {
                  distance: 150,
                  duration: 0.4
                },
                push: {
                  particles_nb: 5
                }
              }
            },
            retina_detect: true,
            motion: {
              reduce: {
                factor: 4,
                value: true
              }
            }
          }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1
          }}
        />
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;