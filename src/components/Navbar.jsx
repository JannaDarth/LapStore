import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import LoginRegForm from "./LoginRegForm";
import Register from "./Register";
import DropUser from "./DropUser";

function Navbar({ profile }) {
  const [searcModule, setSearchModule] = useState(false);
  const [regModule, setRegModule] = useState(false);
  const [register, setRegister] = useState(false);
  const [searchFor, setSearchFor] = useState("");
  const [dropUser, setDropUser] = useState(profile.length ? true : false);
  return (
    <header>
      <nav
        className="container"
        style={{ pointerEvents: regModule ? "none" : "inherit",filter:regModule?"blur(4px)":"inherit"}}
      >
        <NavLink onClick={() => window.scroll(0, 0)} className="logo" to="/">
          Lap<span>Store</span>
        </NavLink>
        <ul className="navbar">
          <NavLink to="/store">Store</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/about">About Us</NavLink>
        </ul>
        <ul className="userbar">
          <li
            className="userDropDown"
            onClick={() =>
              profile.length ? setDropUser(!dropUser) : setRegModule((p) => !p)
            }
          >
            <span>
              <FontAwesomeIcon icon={faUser} />
            </span>
            {dropUser && <DropUser />}
          </li>
          <li>
            <NavLink to="/basket">
              <span>
                <FontAwesomeIcon icon={faCartShopping} />
              </span>
            </NavLink>
          </li>
          <li onClick={() => setSearchModule((p) => !p)}>
            <span>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
          </li>
        </ul>
      </nav>
      {searcModule && (
        <form
          onSubmit={(e) => e.preventDefault()}
          style={{ display: !searcModule && "none" }}
        >
          <div className="container">
            <div className="searchbar">
              <button onClick={() => console.log(searchFor)}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
              <input
                onChange={(e) => setSearchFor(e.target.value)}
                value={searchFor}
                type="text"
                placeholder="Search"
              />
              <button
                type="button"
                onClick={() =>
                  searchFor.length
                    ? setSearchFor("")
                    : setSearchModule((p) => !p)
                }
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          </div>
        </form>
      )}
      {regModule && (
        <div onClick={() => setRegModule(!regModule)} className="grayScale">
          {!register && (
            <LoginRegForm
              setRegModule={setRegModule}
              setRegister={setRegister}
            />
          )}
          {register && (
            <Register setRegister={setRegister} setRegModule={setRegModule} />
          )}
        </div>
      )}
    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
  };
};
export default connect(mapStateToProps)(Navbar);
