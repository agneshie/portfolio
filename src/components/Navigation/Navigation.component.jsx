import Navlink from "../Navlink/Navlink.component";

import { NAV_LINKS } from "../../constants/contants";

import "./Navigation.styles.scss";

const Navigation = () => {
  return(
    <div className="navigation-container">
      <div className="container nav-bar">
        <div className="logo-container">
          <h2>I am navbar</h2>
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