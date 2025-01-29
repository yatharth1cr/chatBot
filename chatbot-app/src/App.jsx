import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UserRegistration from "./pages/Register";
import EmailVerification from "./pages/EmailVerification";
import SetupOrganization from "./pages/SetupOrganization";
import ChatbotIntegration from "./pages/ChatbotIntegration";
import IntegrationSuccess from "./pages/IntegrationSuccess";
import IntegrationFailure from "./pages/IntegrationFailure";
import ContactUs from "./pages/ContactUs";
import Homepage from "./pages/Homepage";

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#001433";
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="pt-20 pb-20 smooth-scroll">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<UserRegistration />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/verify-email" element={<EmailVerification />} />
          <Route path="/setup-organization" element={<SetupOrganization />} />
          <Route path="/chatbot-integration" element={<ChatbotIntegration />} />
          <Route path="/integration-success" element={<IntegrationSuccess />} />
          <Route path="/integration-failure" element={<IntegrationFailure />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
