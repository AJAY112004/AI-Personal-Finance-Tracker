import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

function SocialLogin() {
  return (
    <>
      <button
        type="button"
        className="social-btn"
      >
        <FcGoogle size={18} />
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
        OR
      </div>
    </>
  );
}

export default SocialLogin;