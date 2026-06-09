import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Eye, EyeOff } from "lucide-react";
import loginSide from "../assets/loginSide.png";
import "../CSS/Login.css";

function Login() {

  const [showPassword, setShowPassword] =
    useState(false);

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
      remember: false,
    });

  const handleChange = (e) => {

    const { name, value, type, checked } =
      e.target;

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

    console.log(
      "Ready for backend login:",
      formData
    );

    /*
    Backend Integration

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/api/login/",
        formData
      );

    } catch(error) {

      console.error(error);

    }
    */

  };

  return (

    <div className="login-page">

      {/* LEFT PANEL */}

      <div className="login-left">

        <div className="login-image-card">

          <img
            src={loginSide}
            alt="Finance"
          />

        </div>

      </div>

      {/* RIGHT PANEL */}

      <div className="login-right">

        <form
          className="login-card"
          onSubmit={handleSubmit}
        >

          <h1>
            Lumina Finance
          </h1>

          <p className="subtitle">
            Sign in to manage your
            institutional portfolio.
          </p>

          {/* SOCIAL LOGIN */}

          <button
            type="button"
            className="social-btn"
          >

            <FcGoogle size={20} />

            Continue with Google

          </button>

          <button
            type="button"
            className="social-btn"
          >

            <FaApple size={18} />

            Continue with Apple

          </button>

          <div className="divider">
            or sign in with email
          </div>

          {/* EMAIL */}

          <label>
            Email Address
          </label>
          
          <input
            type="email"
            name="email"
            placeholder="name@company.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* PASSWORD */}

          <label>
            Password
          </label>

          {/* <div className="password-box"> */}

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              name="password"
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

              {showPassword
                ? <EyeOff size={18} />
                : <Eye size={18} />}

            </button>

          {/* </div> */}

          <div className="login-options">

            <label className="remember">

              <input
                type="checkbox"
                name="remember"
                checked={
                  formData.remember
                }
                onChange={handleChange}
              />

              Remember me

            </label>

            <Link to="/forgot">
              Forgot Password?
            </Link>

          </div>

          <button
            type="submit"
            className="login-btn"
          >
            <Link to="/Dashboard">
              Sign In
            </Link>
          </button>

          <div className="signup-link">

            Don't have an account?

            <Link to="/create-account">
              Request Access
            </Link>

          </div>

        </form>

      </div>

    </div>

  );

}

export default Login;