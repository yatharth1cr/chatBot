import React from "react";
import { useNavigate } from "react-router-dom";

function IntegrationFailure() {
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate("/chatbot-integration");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
        <h1 className="text-3xl font-bold mb-4 text-red-600">
          Integration Failed
        </h1>
        <p className="text-lg mb-4">
          We couldn't detect the integration. Please try again.
        </p>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition-colors"
          onClick={handleRetry}
        >
          Retry Integration
        </button>
      </div>
    </div>
  );
}

export default IntegrationFailure;
