import "../CSS/CreateAccount.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

function CreateAccount() {
  return (
    <div className="main-container">

      {/* LEFT */}

      <div className="left-section">

        <div className="hero-card">

          <div className="hero-content">

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

          </div>

          <div className="chart-area">

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

      </div>

      {/* RIGHT */}

      <div className="right-section">

        <form
          className="create-form"
          onSubmit={(e) => e.preventDefault()}
        >

          <h2>Create an account</h2>

          <p className="subtitle">
            Join Lumina Finance and take control of your wealth.
          </p>

          <label>Full Name</label>

          <input
            type="text"
            placeholder="John Doe"
            required
          />

          <label>Email Address</label>

          <input
            type="email"
            placeholder="john@example.com"
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="••••••••"
            required
          />

          <small>
            Must be at least 8 characters.
          </small>

          <button
            type="submit"
            className="sub-button"
          >
            Create Account →
          </button>

          <div className="divider">
            or continue with
          </div>

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


          <Link to="/login">
            Already have an account?
            <span> Sign in</span>
          </Link>

        </form>

      </div>

    </div>
  );
}

export default CreateAccount;