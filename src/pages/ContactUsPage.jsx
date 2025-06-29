import PagesHeader from "../components/PagesHeader";

import { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import ContactInfo from "../components/ConatctInfo";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="flex flex-col gap-28">
      <PagesHeader
        title="Contact Us"
        description={
          "Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."
        }
      />

      <div className="bg-white flex rounded-lg shadow-lg">
        {/* Left side - Contact Form */}
        <div className="flex flex-col flex-1 gap-12 p-20 ">
          {/* First Name and Last Name Row */}
          <div className="grid grid-cols-2 gap-9">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter First Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter Last Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-200"
              />
            </div>
            {/* Subject */}
          </div>
          <div className="w-full">
            <label className="text-sm font-medium text-gray-900 mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Enter your Subject"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Enter your Message here..."
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-200 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              onClick={handleSubmit}
              className=" px-8 py-5 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Send Your Message
            </button>
          </div>
        </div>

        {/* Right side - Contact Info */}
        <div className="flex flex-col gap-5  p-20 w-2/5">
          {/* Email */}
          <ContactInfo
            icon={
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center ">
                <Mail className="w-6 h-6 text-gray-600" />
              </div>
            }
            text={"support@skillbridge.com"}
          />

          {/* Phone */}

          <ContactInfo
            icon={
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center ">
                <Phone className="w-6 h-6 text-gray-600" />
              </div>
            }
            text={"+91 00000 00000"}
          />

          {/* Location */}
          <ContactInfo
            icon={
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center ">
                <MapPin className="w-6 h-6 text-gray-600" />
              </div>
            }
            text={"Some Where in the World"}
          />

          {/* Social Media */}
          <ContactInfo
            icon={
              <div className="flex space-x-3 mb-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
                >
                  <Facebook className="w-5 h-5 text-gray-600" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
                >
                  <Twitter className="w-5 h-5 text-gray-600" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5 text-gray-600" />
                </a>
              </div>
            }
            text={"Social Profiles"}
          />
        </div>
      </div>
    </div>
  );
};
export default ContactUsPage;
