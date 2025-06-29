import { useState } from "react";
import InputField from "../components/InputField";
import UserTypeRadio from "../components/UserTypeRadio";
import TermsCheckbox from "../components/TermsCheckbox";
import Divider from "../components/Divider";
import GoogleButton from "../components/GoogleButton";
import { ArrowRight } from "lucide-react";
const Signup = ({ onClose, onSwitchToLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState("Student");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
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

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!validatePhone(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!agreeToTerms) {
      newErrors.terms = "You must agree to the terms and privacy policy";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Sign up attempt:", { ...formData, userType, agreeToTerms });
      alert("Account created successfully! (This is a demo)");
    }
  };

  const handleGoogleAuth = () => {
    console.log("Sign Up with Google clicked");
    alert("Sign Up with Google (This is a demo)");
  };

  return (
    <div className="space-y-4">
      <InputField
        label="Full Name"
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Enter your Name"
        error={errors.fullName}
      />

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
        label="Phone Number"
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="Enter phone number"
        error={errors.phoneNumber}
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

      <UserTypeRadio userType={userType} setUserType={setUserType} />

      <TermsCheckbox
        agreeToTerms={agreeToTerms}
        setAgreeToTerms={setAgreeToTerms}
        error={errors.terms}
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
      >
        Sign Up
      </button>

      <Divider />

      <GoogleButton onClick={handleGoogleAuth} text="Sign Up with Google" />

      <div className="text-center mt-6">
        <span className="text-sm text-gray-600">Already have an account? </span>
        <button
          onClick={onSwitchToLogin}
          className="text-sm text-orange-600 hover:text-orange-700 font-medium inline-flex items-center gap-1"
        >
          Login
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Signup;
