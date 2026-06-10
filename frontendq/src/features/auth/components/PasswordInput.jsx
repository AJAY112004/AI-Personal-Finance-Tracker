import { useState } from "react";
import {
  Eye,
  EyeOff,
} from "lucide-react";

function PasswordInput({
  value,
  onChange,
  name = "password",
  placeholder = "••••••••",
}) {
  const [showPassword,
    setShowPassword] =
    useState(false);

  return (
    <div className="password-box">

      <input
        type={
          showPassword
            ? "text"
            : "password"
        }
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
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
          <EyeOff size={18} />
        ) : (
          <Eye size={18} />
        )}
      </button>

    </div>
  );
}

export default PasswordInput;