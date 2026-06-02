import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../CSS/CreateAccount.css";

import { FcGoogle } from "react-icons/fc";
import { FaApple, FaEye, FaEyeSlash } from "react-icons/fa";

function CreateAccount() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(formData);

    navigate("/dashboard");

  };

  return (

    <div className="signup-container">

      {/* LEFT */}

      <div className="signup-left">

        <div className="brand">

          ▲ Lumina Finance

        </div>

        <div className="hero-card">

          <h1>
            Institutional Wealth,
            <br />
            Accessible.
          </h1>

          <p>
            Experience next-generation portfolio management
            and intelligent insights driven by advanced
            analytics.
          </p>

          <div className="chart-section">

            <div className="growth-card">

              <span>📈 Portfolio Growth</span>

              <h2>+24.8%</h2>

            </div>

            <div className="bars">

              <div className="bar bar1"></div>
              <div className="bar bar2"></div>
              <div className="bar bar3"></div>
              <div className="bar bar4"></div>
              <div className="bar bar5"></div>

            </div>

          </div>

        </div>

        <p className="copyright">
          © 2026 Lumina Finance.
          All rights reserved.
        </p>

      </div>

      {/* RIGHT */}

      <div className="signup-right">

        <form
          className="signup-form"
          onSubmit={handleSubmit}
        >

          <h2>Create an account</h2>

          <p className="subtitle">
            Join Lumina Finance and take control of your wealth.
          </p>

          <label>Full Name</label>

          <input
            type="text"
            name="fullName"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <label>Email Address</label>

          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>

          <div className="password-box">

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
                ? <FaEyeSlash />
                : <FaEye />}

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

            <span>
              or continue with
            </span>

          </div>

          <div className="social-container">

            <button
              type="button"
              className="social-btn"
            >

              <FcGoogle size={22} />

              Continue with Google

            </button>

            <button
              type="button"
              className="social-btn"
            >

              <FaApple size={20} />

              Continue with Apple

            </button>

          </div>

          <p className="signin-text">

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