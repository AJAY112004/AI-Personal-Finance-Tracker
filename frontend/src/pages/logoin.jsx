import logo from "../assets/loginSide.png";
import "../CSS/login.css";

import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

function LogoLeft() {
  return (
    <div className="main-container">

      {/* Left Image */}
      <div className="left-section">
        <img src={logo} alt="Finance" />
      </div>

      {/* Right Form */}
      <div className="right-section">

        <form className="login-form">

          <h1>Lumina Finance</h1>

          <p className="subtitle">
            Sign in to manage your institutional portfolio.
          </p>

          {/* Google */}
          <button type="button" className="social-btn">
            <FcGoogle size={20} />
            Continue with Google
          </button>

          {/* Apple */}
          <button type="button" className="social-btn">
            <FaApple size={20} />
            Continue with Apple
          </button>

          <div className="divider">
            <span>or sign in with email</span>
          </div>

          {/* Email */}
          <label>Email Address</label>
          <input type="email" placeholder="name@company.com" />

          {/* Password */}
          <label>Password</label>

          <div className="password-box">
            <input type="password" placeholder="••••••••" />
            <FaEye className="eye-icon" />
          </div>

          {/* Bottom Row */}
          <div className="bottom-row">
            <div className="remember">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>

            <a href="/">Forgot Password?</a>
          </div>

          {/* Sign In */}
          <button type="submit" className="signin-btn">
            Sign In
          </button>

          <p className="footer-text">
            Don't have an account?
            <span> Request Access</span>
          </p>

        </form>

      </div>

    </div>
  );
}

export default LogoLeft;