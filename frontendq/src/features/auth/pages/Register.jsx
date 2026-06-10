import { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail } from "lucide-react";

import SocialLogin from "../components/SocialLogin";
import PasswordInput from "../components/PasswordInput";
import { registerUser } from "../services/authService";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await registerUser(formData);

      navigate("/");

    } catch (error) {

      console.error(error);

    }

  };

  return (
    <div className="create-page">

      {/* LEFT */}

      <div className="create-left">

        <div className="brand">
          ▲ Lumina Finance
        </div>

        <div className="hero-card">

          <h2>
            Institutional Wealth,
            Accessible.
          </h2>

          <p>
            Experience next-generation
            portfolio management and
            intelligent insights driven
            by advanced analytics.
          </p>

          <div className="growth-card">
            <span>Portfolio Growth</span>
            <h3>+24.8%</h3>
          </div>

          <div className="bars">
            <div className="bar b1"></div>
            <div className="bar b2"></div>
            <div className="bar b3"></div>
            <div className="bar b4"></div>
            <div className="bar b5"></div>
          </div>

        </div>

        <p className="copyright">
          © 2024 Lumina Finance. All rights reserved.
        </p>

      </div>

      {/* RIGHT */}

      <div className="create-right">

        <form
          className="create-form"
          onSubmit={handleSubmit}
        >

          <h1>Create an account</h1>

          <p className="subtitle">
            Join Lumina Finance and take control of your wealth.
          </p>

          <label>Full Name</label>

          <div className="input-box">

            <User size={18} />

            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
            />

          </div>

          <label>Email Address</label>

          <div className="input-box">

            <Mail size={18} />

            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
            />

          </div>

          <label>Password</label>

          <PasswordInput
            value={formData.password}
            onChange={handleChange}
          />

          <small className="password-note">
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

          <SocialLogin />

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

export default Register;