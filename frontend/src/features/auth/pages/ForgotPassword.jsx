import { useState } from "react";
import "./ForgotPassword.css"

import {
  Link,
} from "react-router-dom";

import {
  forgotPassword,
} from "../services/authService";

function ForgotPassword() {

  const [email,
    setEmail] =
    useState("");

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        await forgotPassword(
          email
        );

        alert(
          "Reset email sent"
        );

      } catch (error) {

        console.error(
          error
        );

      }

    };

  return (
    <div className="forgot-page">

      <div className="forgot-logo">
        ◉ Lumina Finance
      </div>

      <form onSubmit={handleSubmit}>

        <div className="forgot-icon">
          🔒
        </div>

        <h1>Reset your password</h1>

        <p>
          Enter the email associated with your
          account and we'll send an instruction
          to reset it.
        </p>

        <label>Email Address</label>

        <input
          type="email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          placeholder="name@organization.com"
        />

        <button type="submit">
          Send Reset Link →
        </button>

      </form>

      <Link to="/">
        ← Back to Login
      </Link>

    </div>
  );
}

export default ForgotPassword;