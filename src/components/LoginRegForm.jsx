import React, { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import Swal from "sweetalert2";
function LoginRegForm({ setRegModule, setRegister, users, dispatch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNoAcc = () => {
    setRegister(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginMatch = users.some(
      (user) => user.email == email && user.password == password
    );
    loginMatch
      ? Swal.fire({
          position: "center",
          icon: "success",
          title: "Logged in successfully",
          showConfirmButton: false,
          iconColor: "rgb(222, 90, 16)",
          timer: 800,
        })
      : Swal.fire({
          position: "center",
          icon: "error",
          title: "Wrong password or email",
          showConfirmButton: false,
          iconColor: "rgb(222, 90, 16)",
          timer: 800,
        });
    loginMatch && dispatch({ type: "LOGOUT", payload: email });
    loginMatch &&
      setTimeout(() => {
        setRegModule(false);
      }, 800);
  };
  return (
    <section onClick={(e) => e.stopPropagation()} className="form-container">
      <form onSubmit={handleSubmit}>
        <h2 className="form-heading">Login</h2>
        <label>
          Email:{" "}
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </label>
        <button
          type="submit"
          className="btn_style"
          disabled={email.length < 5 || password.length < 5}
        >
          Log in
        </button>
        <a onClick={() => handleNoAcc()}>Don't have an account?</a>
      </form>
    </section>
  );
}
const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};
export default connect(mapStateToProps)(LoginRegForm);
