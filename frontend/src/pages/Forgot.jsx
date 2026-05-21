import "../CSS/Forgot.css";
import { Link } from "react-router-dom";

import {
  FaArrowLeft,
  FaArrowRight,
  FaEnvelope,
} from "react-icons/fa";

import { IoReloadCircle } from "react-icons/io5";

function Forgot() {
  return (
    <div className="forgot-page">

      <div className="brand">

        <div className="logo-box">
          ✦
        </div>

        <h1>Lumina Finance</h1>

      </div>

      <div className="forgot-card">

        <div className="icon-circle">
          <IoReloadCircle />
        </div>

        <h2>
          Reset your password
        </h2>

        <p className="subtitle">

          Enter the email associated
          with your account and
          we'll send instructions
          to reset it.

        </p>

        <form
          onSubmit={(e) =>
            e.preventDefault()
          }
        >

          <label htmlFor="email">
            Email Address
          </label>

          <div className="input-box">

            <FaEnvelope
              className="mail-icon"
            />

            <input
              id="email"
              type="email"
              required
              placeholder="name@organization.com"
            />

          </div>

          <button
            type="submit"
            className="reset-btn"
          >
            Send Reset Link

            <FaArrowRight />
          </button>

        </form>

      </div>
      <Link
        to="/login"
        className="back-link"
      >
        <FaArrowLeft />

        Back to Login
      </Link>

    </div>
  );
}

export default Forgot;