import React from "react";
import { useNavigate } from "react-router-dom";

function ChatbotIntegration() {
  const navigate = useNavigate();

  const handleTestChatbot = () => {
    // Handle test chatbot logic
    window.open("https://example.com", "_blank");
  };

  const handleIntegrate = () => {
    // Handle integration logic
    navigate("/integration-success");
  };

  const handleTestIntegration = () => {
    // Handle test integration logic
    navigate("/integration-success");
  };

  return (
    <div
      className="container mx-auto p-4"
      style={{ backgroundColor: "#001433" }}
    >
      <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 max-w-xl mx-auto">
        <img
          src="https://beyondchats.com/wp-content/uploads/2024/04/output-onlinepngtools.png"
          alt="Logo"
          className="mb-4 mx-auto"
        />
        <h1 className="text-3xl font-bold mb-4 text-blue-600">
          Chatbot Integration & Testing
        </h1>
        <button
          className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded hover:bg-gray-500 transition-colors"
          onClick={handleTestChatbot}
        >
          Test Chatbot
        </button>
        <button
          className="cursor-pointer px-4 py-2 bg-green-500 text-white rounded ml-2 hover:bg-gray-500 transition-colors"
          onClick={handleIntegrate}
        >
          Integrate on your website
        </button>
        <button
          className="cursor-pointer px-4 py-2 bg-gray-500 text-white rounded ml-2 hover:bg-gray-700 transition-colors"
          onClick={handleTestIntegration}
        >
          Test Integration
        </button>
      </div>
    </div>
  );
}

export default ChatbotIntegration;
