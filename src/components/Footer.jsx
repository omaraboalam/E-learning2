import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white pt-14 px-4 mt-32">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="flex flex-col gap-10 ">
            <h2 className="text-5xl font-bold text-primary">E-Learning</h2>
            <div className="flex flex-col gap-5 text-gray15">
              <p className="flex items-center gap-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>hello@skillbridge.com</span>
              </p>
              <p className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+91 91813 23 2309</span>
              </p>
              <p className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Somewhere in the World</span>
              </p>
            </div>
          </div>
          <div className="flex gap-32">
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-xl text-gray15">Home</h3>
              <ul className="flex flex-col gap-2 font-[400] text-gray35">
                <li>Benefits</li>
                <li>Our Courses</li>
                <li>Our Testimonials</li>
                <li>Our FAQ</li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-xl text-gray15">About Us</h3>
              <ul className="flex flex-col gap-2 font-[400] text-gray35">
                <li>Company</li>
                <li>Achievements</li>
                <li>Our Goals</li>
              </ul>
            </div>

            <div className=" flex flex-col gap-4">
              <h3 className="font-semibold text-xl text-gray15">
                Social Profiles
              </h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-700 hover:text-blue-600">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-400">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-700">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-6 mt-8 border-t border-gray-200">
          <p className="text-gray-600 pb-4">
            © 2023 Skillbridge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
