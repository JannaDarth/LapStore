import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitterSquare,
  faInstagramSquare,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { memo } from "react";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="leftFoot">
          <Link className="logo" to="/">
            Lap<span>Store</span>
          </Link>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="footerInputArea"
          >
            <label>Subscribe to not miss special offers</label>
            <input type="email" placeholder="email" />
            <button>Join</button>
          </form>
        </div>
        <div className="rightFoot">
          <ul className="footerNav">
            <Link to="/store">Store</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About us</Link>
          </ul>
          <div className="footerInfo">
            <p>
              <FontAwesomeIcon icon={faBuilding} />
              New Jersey 187 TX USA 17356
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} />
              +1 832 434 30 XX
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} />
              info@lapStore.co
            </p>
            <div className="socials">
              <Link to="https://www.facebook.com/" target="_blank">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link to="https://twitter.com/" target="_blank">
                <FontAwesomeIcon icon={faTwitterSquare} />
              </Link>
              <Link to="https://www.instagram.com/" target="_blank">
                <FontAwesomeIcon icon={faInstagramSquare} />
              </Link>
              <Link to="https://web.telegram.org/" target="_blank">
                <FontAwesomeIcon icon={faTelegram} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
