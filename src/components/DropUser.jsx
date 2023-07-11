import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function DropUser({dispatch}) {
  return (
    <ul className="loggedUser">
      <li>
        <Link to={"/profile"}>Profile</Link>
      </li>
      <li>Settings</li>
      <li onClick={()=>dispatch({type:"LOGINOUT"})}>Log out</li>
    </ul>
  );
}

export default connect()(DropUser);
