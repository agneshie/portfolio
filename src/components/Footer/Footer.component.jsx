import LinkItem from "../LinkItem/LinkItem.component";

import { SOCIALS } from "../../constants/contants";

import "./Footer.styles.scss";

const Footer = () => {
  let currentYear = new Date().getFullYear();

  return(
    <footer id="footer" className="footer-container">
      <div className="container footer-details">
        <div className="footer-info">
          <span>© {currentYear} Agnes Therese Nicer</span>
        </div>

        <div className="footer-socials">
          {
            SOCIALS.map((social) => {
              return(
                <LinkItem key={social.id} linkItem={social} social={true} />
              )
            })
          }
        </div>
      </div>
    </footer>
  );
}

export default Footer;