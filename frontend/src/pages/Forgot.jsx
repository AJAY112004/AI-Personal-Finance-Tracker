import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ShieldCheck } from "lucide-react";

import "../CSS/Forgot.css";

function Forgot() {

  const [email, setEmail] =
    useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    console.log(
      "Ready for backend password reset:",
      email
    );

    /*
    Backend Integration

    try {

      await axios.post(
        "http://127.0.0.1:8000/api/forgot-password/",
        {
          email
        }
      );

    } catch(error) {

      console.error(error);

    }
    */

  };

  return (

    <div className="forgot-page">

      {/* LOGO */}

      <div className="forgot-logo">

        <div className="logo-icon">

          <ShieldCheck size={14} />

        </div>

        <span>
          Lumina Finance
        </span>

      </div>

      {/* CARD */}

      <div className="forgot-card">

        <div className="forgot-icon">

          <ShieldCheck size={26} />

        </div>

        <h1>
          Reset your password
        </h1>

        <p>
          Enter the email associated with your
          account and we'll send an instruction
          to reset it.
        </p>

        <form
          onSubmit={handleSubmit}
        >

          <label>
            Email Address
          </label>

          <div className="input-box">

            <Mail size={18} />

            <input
              type="email"
              placeholder="name@organization.com"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              required
            />

          </div>

          <button
            type="submit"
            className="reset-btn"
          >

            Send Reset Link →

          </button>

        </form>

      </div>

      <Link
        to="/"
        className="back-link"
      >

        ← Back to Login

      </Link>

    </div>

  );

}

export default Forgot;