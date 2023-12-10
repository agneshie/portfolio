import LinkItem from "../LinkItem/LinkItem.component";

import { ABOUT_DETAILS } from "../../constants/contants";
import { SOCIALS } from "../../constants/contants";

import "./About.styles.scss";

//import profile from "../../images/profile.png";

const About = () => {
  return(
    <section id="about" className="about-container">
      <div className="container">
        <h2 className="about-heading">{ABOUT_DETAILS.heading}</h2>
        <div className="about-details">
          <div className="about-profile">
            <img src={ABOUT_DETAILS.profileUrl} alt="profile" className="profile" />
          </div>
          <div className="about-me">
            <h3>{ABOUT_DETAILS.subHeading}</h3>
            <p>{ABOUT_DETAILS.description}</p>
            <p>{ABOUT_DETAILS.hobby}</p>
            <div className="about-socials">
              {
                SOCIALS.map((social) => {
                  return(
                    <LinkItem key={social.id} linkItem={social} social={true} />
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <div className="about-border" />
    </section>
    
  );
}

export default About;