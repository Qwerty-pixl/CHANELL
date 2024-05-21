import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="Foot flex">
          <Logo />
          <div className="Foot_menu">
            <p className="Foot_tit">MAIN</p>
            <div className="Foot_menu-in flex">
              <Menu />
              <p>
              CHANEL advisors are at your disposal for any information. You can contact us by email
              </p>
            </div>
          </div>
        
          <p>
          This Privacy Policy was last updated on March 2023. We will inform you with regard to any substantial changes which may be made to this Privacy Policy.
          </p>
          <p>.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
