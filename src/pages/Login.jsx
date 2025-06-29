import { useState } from "react";
import { ArrowRight } from "lucide-react";
import InputField from "../components/InputField";
import Divider from "../components/Divider";
import GoogleButton from "../components/GoogleButton";
const Login = ({ onClose, onSwitchToSignUp }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Login attempt:", { ...formData, rememberMe });
      alert("Login successful! (This is a demo)");
    }
  };

  const handleGoogleAuth = () => {
    console.log("Login with Google clicked");
    alert("Login with Google (This is a demo)");
  };

  return (
    <div className="flex flex-col gap-4 max-w-lg">
      <InputField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your Email"
        error={errors.email}
      />

      <InputField
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter your Password"
        error={errors.password}
        showPassword={showPassword}
        onTogglePassword={() => setShowPassword(!showPassword)}
      />

      <div className="flex items-center justify-between">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
          />
          <span className="ml-2 text-sm text-gray-700">Remember Me</span>
        </label>
        <button className="text-sm text-gray-600 hover:text-gray-800">
          Forgot Password?
        </button>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
      >
        Login
      </button>

      <Divider />

      <GoogleButton onClick={handleGoogleAuth} text="Login with Google" />

      <div className="text-center mt-6">
        <span className="text-sm text-gray-600">Don't have an account? </span>
        <button
          onClick={onSwitchToSignUp}
          className="text-sm text-orange-600 hover:text-orange-700 font-medium inline-flex items-center gap-1"
        >
          Sign Up
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Login;
