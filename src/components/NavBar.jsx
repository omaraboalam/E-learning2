import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import MainButton from "./MainButton";
const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex justify-between items-center px-7 py-4 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg rounded-xl sticky top-0 z-50"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-12">
        <Logo />
        <ul className="flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-primary transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/OurCourses"
              className="hover:text-primary transition-colors duration-200"
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              to="/AboutUs"
              className="hover:text-primary transition-colors duration-200"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/ContactUs"
              className="hover:text-primary transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/favorites"
              className="hover:text-primary transition-colors duration-200"
            >
              Favorites
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center space-x-4">
        <Link
          to="/Signup"
          className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
        >
          Sign Up
        </Link>
        <Link to="/Login">
          <MainButton>Login</MainButton>
        </Link>
      </div>
    </nav>
  );
};
export default NavBar;
