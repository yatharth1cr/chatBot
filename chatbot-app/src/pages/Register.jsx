import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import Button from "../components/Button";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Handle registration logic
      setErrors({});
      navigate("/verify-email");
    }
  };

  return (
    <div
      className="container mx-auto p-4"
      style={{ backgroundColor: "#001433" }}
    >
      <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 max-w-md mx-auto">
        <img
          src="https://beyondchats.com/wp-content/uploads/2024/04/output-onlinepngtools.png"
          alt="Logo"
          className="mb-4 mx-auto"
        />
        <h1 className="text-3xl font-bold mb-4 text-blue-600">
          User Registration
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            label="Name"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errors.name}
          />
          <FormInput
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />
          <Button
            text="Register"
            type="submit"
            className="cursor-pointer bg-blue-500 hover:bg-gray-500 transition-colors"
          />
          <Button
            text="Continue with Google"
            className="cursor-pointer bg-red-500 hover:bg-gray-500 transition-colors ml-2"
          />
        </form>
      </div>
    </div>
  );
}

export default Register;
