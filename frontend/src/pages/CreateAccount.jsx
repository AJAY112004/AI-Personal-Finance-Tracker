import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

import "../CSS/CreateAccount.css";

function CreateAccount() {

  const [showPassword, setShowPassword] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    console.log(
      "Ready for backend registration:",
      formData
    );

    /*
    Backend Integration

    await axios.post(
      "http://127.0.0.1:8000/api/register/",
      formData
    );
    */

  };

  return (

    <div className="create-page">

      {/* LEFT SECTION */}

      <div className="create-left">

        <div className="brand">

          <span className="brand-logo">
            ▲
          </span>

          <span>
            Lumina Finance
          </span>

        </div>

        <div className="hero-card">

          <div className="hero-content">

            <h2>
              Institutional Wealth,
              <br />
              Accessible.
            </h2>

            <p>
              Experience next-generation
              portfolio management and
              intelligent insights driven
              by advanced analytics.
            </p>

          </div>

          <div className="chart-section">

            <div className="growth-card">

              <span>
                Portfolio Growth
              </span>

              <h3>
                +24.8%
              </h3>

            </div>

            <div className="bars">

              <div className="bar b1"></div>
              <div className="bar b2"></div>
              <div className="bar b3"></div>
              <div className="bar b4"></div>
              <div className="bar b5"></div>

            </div>

          </div>

        </div>

        <p className="copyright">
          © 2024 Lumina Finance.
          All rights reserved.
        </p>

      </div>

      {/* RIGHT SECTION */}

      <div className="create-right">

        <form
          className="create-form"
          onSubmit={handleSubmit}
        >

          <h1>
            Create an account
          </h1>

          <p className="subtitle">
            Join Lumina Finance and
            take control of your wealth.
          </p>

          <label>
            Full Name
          </label>

          <div className="input-box">

            <User size={18} />

            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />

          </div>

          <label>
            Email Address
          </label>

          <div className="input-box">

            <Mail size={18} />

            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>

          <label>
            Password
          </label>

          <div className="input-box">

            <Lock size={18} />

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

          </div>

          <small>
            Must be at least 8 characters.
          </small>

          <button
            type="submit"
            className="create-btn"
          >

            Create Account →

          </button>

          <div className="divider">
            or continue with
          </div>

          <div className="social-row">

            <button
              type="button"
              className="social-btn"
            >

              <FcGoogle size={18} />

              Google

            </button>

            <button
              type="button"
              className="social-btn"
            >

              <FaApple size={18} />

              Apple

            </button>

          </div>

          <p className="signin-link">

            Already have an account?

            <Link to="/">
              Sign in
            </Link>

          </p>

        </form>

      </div>

    </div>

  );

}

export default CreateAccount;