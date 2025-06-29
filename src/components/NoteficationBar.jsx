import { useState, useEffect } from "react";
const NotificationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex gap-6 rounded-lg justify-center items-center bg-primary h-12 mx-7 my-5 transition-all duration-300 ${
        isScrolled
          ? "opacity-0 transform -translate-y-2"
          : "opacity-100 transform translate-y-0"
      }`}
    >
      <p className="text-white">Free Courses 🌟 Sale Ends Soon, Get It Now</p>
      <img className="w-3 h-4" src="/Vector.svg" alt="Notification Icon" />
    </div>
  );
};
export default NotificationBar;
