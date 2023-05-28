import React from "react";
import { useState } from "react";
function LoginRegForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="form-container">
      <form onSubmit={handleSubmit}>
        <h2 className="form-heading">Login</h2>
        <label>Email: <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        /></label>
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

        <button type="submit" className="btn_style">
          Submit
        </button>
        <a href="#">
          Don't have an account?
        </a>
      </form>
    </section>
  );
}

export default LoginRegForm;
