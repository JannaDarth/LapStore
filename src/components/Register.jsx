import { useState } from "react";
import { connect } from "react-redux";
import Swal from "sweetalert2";
function Register({ setRegister,setRegModule, dispatch }) {
  const [newUser, setNewUser] = useState({
    email: "",
    username: "",
    password: "",
  });
  const submitNewUser = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADDNEWUSER",
      payload: newUser,
    });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Registration successfull',
      showConfirmButton: false,
      iconColor:"rgb(222, 90, 16)",
      timer: 800
    });
    setTimeout(()=>{
      setRegModule(false);
      setRegister(false);
    },800)
  };
  const handleNewUser = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <section onClick={(e) => e.stopPropagation()} className="form-container">
      <form onSubmit={submitNewUser}>
        <h2 className="form-heading">Register</h2>
        <label>
          Email:{" "}
          <input
            type="email"
            name="email"
            value={newUser.email}
            onChange={handleNewUser}
            required
          />
        </label>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={newUser.username}
            onChange={handleNewUser}
            required={newUser.username.length > 5}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={newUser.password}
            onChange={handleNewUser}
            required
          />
        </label>
        <button
          disabled={newUser.username.length < 3 || newUser.password.length < 5}
          type="submit"
          className="btn_style"
        >
          Register
        </button>
        <a onClick={() => setRegister(false)}>Log in with existing account ?</a>
      </form>
    </section>
  );
}

export default connect()(Register);
