import { useState } from "react";
import "./Login.css"
import {
  Link,
  useNavigate,
} from "react-router-dom";

import loginSide from "../../../assets/loginSide.png";

import SocialLogin from "../components/SocialLogin";
import PasswordInput from "../components/PasswordInput";
import AuthLayout from "../components/AuthLayout";

import { loginUser } from "../services/authService";
import { useAuth } from "../AuthContext";

function Login() {

  const navigate =
    useNavigate();

  const { login } =
    useAuth();

  const [formData,
    setFormData] =
    useState({
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

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        const response =
          await loginUser(
            formData
          );

        login(
          response.token
        );

        navigate(
          "/dashboard"
        );

      } catch (error) {

        console.error(
          error
        );

      }

    };

  return (
    <AuthLayout
      leftContent={
        <img
          src={loginSide}
          alt="Login"
        />
      }
    >

      <form
        className="login-card"
        onSubmit={
          handleSubmit
        }
      >

        <h1>Lumina Finance</h1>

        <p className="subtitle">
          Sign in to manage your institutional portfolio.
        </p>

        <SocialLogin />

        <label>Email</label>

        <input
          type="email"
          name="email"
          value={
            formData.email
          }
          onChange={
            handleChange
          }
          required
        />

        <label>
          Password
        </label>

        <PasswordInput
          value={
            formData.password
          }
          onChange={
            handleChange
          }
        />

        <div
          className="login-options"
        >
          <Link
            to="/forgot-password"
          >
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="login-btn"
        >
          Sign In
        </button>

        <p>Don't have an account?
          <Link to="/register">
            Request Access
          </Link>
        </p>
      </form>

    </AuthLayout>
  );
}

export default Login;