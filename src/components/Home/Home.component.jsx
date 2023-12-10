import { HERO_DETAILS } from "../../constants/contants";

import ParticlesBackground from "../ParticlesBackground/ParticlesBackground.component";

import "./Home.styles.scss"

const Home = () => {
  return(
    <div>
      <ParticlesBackground />
      <div className="container home-container">
        <div className="hero">
          <div className="hero-details">
            <h1 className="name">Hi. I'm {HERO_DETAILS.name}.</h1>
            <h2 className="position">{HERO_DETAILS.position}.</h2>
            <p className="description">{HERO_DETAILS.description}</p>
          </div>
          
        </div>
        
      </div>
      <div className="brush" />
    </div>
  );
}

export default Home;