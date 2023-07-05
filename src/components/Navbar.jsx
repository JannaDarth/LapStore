import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import LoginRegForm from "./LoginRegForm";

function Navbar() {
  const [searcModule, setSearchModule] = useState(false);
  const [regModule, setRegModule] = useState(false);
  const [searchFor, setSearchFor] = useState("");
  useEffect(() => {});
  return (
    <header>
      <nav className="container">
        <NavLink className="logo" to="/">
          Lap<span>Store</span>
        </NavLink>
        <ul className="navbar">
          <NavLink to="/store">Store</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/about">About Us</NavLink>
        </ul>
        <ul className="userbar">
          <li onClick={() => setRegModule((p) => !p)}>
            <FontAwesomeIcon icon={faUser} />
          </li>
          <li>
            <NavLink to="/basket">
              <FontAwesomeIcon icon={faCartShopping} />
            </NavLink>
          </li>
          <li onClick={() => setSearchModule((p) => !p)}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
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
                placeholder="search"
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
      {regModule && <LoginRegForm />}
    </header>
  );
}

export default Navbar;
