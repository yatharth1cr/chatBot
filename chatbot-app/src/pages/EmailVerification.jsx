import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function EmailVerification() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!code) {
      setError("Verification code is required");
    } else {
      // Handle email verification logic
      setError("");
      navigate("/setup-organization");
    }
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
          Email Verification
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Verification Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-gray-500 transition-colors"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
}

export default EmailVerification;
