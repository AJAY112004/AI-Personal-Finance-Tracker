import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/loginSide.png";

import "../CSS/login.css";

import { FcGoogle } from "react-icons/fc";
import { FaApple, FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      /*
      Replace this with your Django Login API

      const response = await axios.post(
        "http://127.0.0.1:8000/api/login/",
        formData
      );
      */

      console.log("Login Data:", formData);

      navigate("/dashboard");

    } catch (error) {

      console.error(
        "Login Error:",
        error
      );

    }

  };

  return (

    <div className="main-container">

      {/* LEFT SIDE */}

      <div className="left-section">

        <img
          src={logo}
          alt="Finance Dashboard"
        />

      </div>

      {/* RIGHT SIDE */}

      <div className="right-section">

        <form
          className="login-form"
          onSubmit={handleSubmit}
        >

          {/* TITLE */}

          <h1>
            Lumina Finance
          </h1>

          <p className="subtitle">

            Sign in to manage your
            institutional portfolio.

          </p>

          {/* GOOGLE */}

          <div className="social-container">

            <button
              type="button"
              className="social-btn"
            >

              <FcGoogle size={22} />

              <span>
                Continue with Google
              </span>

            </button>

            {/* APPLE */}

            <button
              type="button"
              className="social-btn"
            >

              <FaApple size={20} />

              <span>
                Continue with Apple
              </span>

            </button>

          </div>

          {/* DIVIDER */}

          <div className="divider">

            <span>
              or sign in with email
            </span>

          </div>

          {/* EMAIL */}

          <label htmlFor="email">

            Email Address

          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="name@company.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* PASSWORD */}

          <label htmlFor="password">

            Password

          </label>

          <div className="password-box">

            <input
              id="password"
              name="password"
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button
              type="button"
              className="eye-btn"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
            >

              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}

            </button>

          </div>

          {/* REMEMBER */}

          <div className="bottom-row">

            <div className="remember">

              <input
                id="remember"
                name="remember"
                type="checkbox"
                checked={
                  formData.remember
                }
                onChange={handleChange}
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

          {/* LOGIN BUTTON */}

          <button
            type="submit"
            className="signin-btn"
          >

            Sign In

          </button>

          {/* FOOTER */}

          <p className="footer-text">

            Don't have an account?{" "}

            <Link
              to="/create-account"
              className="request-link"
            >

              Create Account

            </Link>

          </p>

        </form>

      </div>

    </div>

  );

}

export default Login;