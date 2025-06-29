import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import ContactUsPage from "./pages/ContactUsPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AboutUs from "./pages/AboutUs";
import OurCourses from "./pages/OurCorses";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/ContactUs" element={<ContactUsPage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route
            path="/Signup"
            element={<Signup onClose={() => {}} onSwitchToLogin={() => {}} />}
          />
          <Route
            path="/Login"
            element={<Login onClose={() => {}} onSwitchToSignUp={() => {}} />}
          />
          <Route path="/OurCourses" element={<OurCourses />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
