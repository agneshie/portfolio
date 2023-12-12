import Navlink from "../Navlink/Navlink.component";

import { LOGO_LINK, NAV_LINKS } from "../../constants/contants";

import "./Navigation.styles.scss";

const Navigation = () => {
  return(
    <div className="navigation-container">
      <div className="container nav-bar">
        <div className="logo-container">
          <Navlink key={LOGO_LINK.id} navlink={LOGO_LINK} />
        </div>
        <div className="nav-items">
          {
            NAV_LINKS.map((navlink) => {
              return(
                <Navlink key={navlink.id} navlink={navlink} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Navigation;