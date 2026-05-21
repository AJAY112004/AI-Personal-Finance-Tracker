import logo from "../assets/loginSide.png";
import "../CSS/login.css";

import { Link } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { FaApple, FaEye } from "react-icons/fa";

function Login() {
  return (
    <div className="main-container">

      {/* LEFT */}

      <div className="left-section">

        <img
          src={logo}
          alt="Finance Dashboard"
        />

      </div>

      {/* RIGHT */}

      <div className="right-section">

        <form
          className="login-form"
          onSubmit={(e) => e.preventDefault()}
        >

          {/* Heading */}

          <h1>
            Lumina Finance
          </h1>

          <p className="subtitle">
            Sign in to manage your
            institutional portfolio.
          </p>

          <div className="social-container">

            <button type="button" className="social-btn">
              <FcGoogle size={24} />
              <span>Continue with Google</span>
            </button>

            <button type="button" className="social-btn">
              <FaApple size={22} />
              <span>Continue with Apple</span>
            </button>

          </div>

          {/* Divider */}

          <div className="divider">

            <span>
              or sign in with email
            </span>

          </div>

          {/* Email */}

          <label htmlFor="email">

            Email Address

          </label>

          <input
            id="email"
            type="email"
            placeholder="name@company.com"
            required
          />

          {/* Password */}

          <label htmlFor="password">

            Password

          </label>

          <div className="password-box">

            <input
              id="password"
              type="password"
              placeholder="••••••••"
              required
            />

            <FaEye className="eye-icon" />

          </div>

          {/* Remember */}

          <div className="bottom-row">

            <div className="remember">

              <input
                id="remember"
                type="checkbox"
              />

              <label htmlFor="remember">

                Remember me

              </label>

            </div>

            <Link
              to="/forgot"
              className="forgot-link"
            >
              Forgot Password?
            </Link>

          </div>

          {/* Submit */}

          <button
            type="submit"
            className="signin-btn"
          >
            Sign In
          </button>

          {/* Footer */}

          <p className="footer-text">

            Don't have an account?

            <Link
              to="/create-account"
              className="request-link"
            >
              Request Access
            </Link>

          </p>

        </form>

      </div>

    </div>
  );
}

export default Login;