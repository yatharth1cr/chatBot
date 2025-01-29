import React from "react";
import Button from "../components/Button";

function IntegrationSuccess() {
  return (
    <div className="container mx-auto p-4 text-center">
      <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
        <h1 className="text-3xl font-bold mb-4 text-green-600">
          Integration Successful!
        </h1>
        <p className="text-lg mb-4">
          Your chatbot has been successfully integrated.
        </p>
        <Button
          text="Explore Admin Panel"
          className="mb-2 bg-green-500 hover:bg-green-700 transition-colors"
        />
        <Button
          text="Start talking to your chatbot"
          className="mb-2 bg-green-500 hover:bg-green-700 transition-colors"
        />
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2 text-blue-600">
            Share on Social Media
          </h2>
          {/* Social media sharing buttons */}
          <Button
            text="Share on Facebook"
            className="bg-blue-600 hover:bg-blue-800 mb-2 transition-colors"
          />
          <Button
            text="Share on Twitter"
            className="bg-blue-400 hover:bg-blue-600 mb-2 transition-colors"
          />
        </div>
      </div>
    </div>
  );
}

export default IntegrationSuccess;
