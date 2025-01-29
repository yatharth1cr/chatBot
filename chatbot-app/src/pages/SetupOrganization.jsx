import React, { useState } from "react";
import FormInput from "../components/FormInput";
import Button from "../components/Button";

function SetupOrganization() {
  const [companyName, setCompanyName] = useState("");
  const [websiteURL, setWebsiteURL] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!companyName) newErrors.companyName = "Company Name is required";
    if (!websiteURL) newErrors.websiteURL = "Website URL is required";
    if (!description) newErrors.description = "Description is required";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Handle setup organization logic
      setErrors({});
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
          Setup Organization
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            label="Company Name"
            type="text"
            name="companyName"
            placeholder="Enter company name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            error={errors.companyName}
          />
          <FormInput
            label="Website URL"
            type="url"
            name="websiteURL"
            placeholder="Enter company website URL"
            value={websiteURL}
            onChange={(e) => setWebsiteURL(e.target.value)}
            error={errors.websiteURL}
          />
          <FormInput
            label="Description"
            type="text"
            name="description"
            placeholder="Enter company description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            error={errors.description}
          />
          <Button
            text="Submit"
            type="submit"
            className="cursor-pointer max-w-full bg-blue-500 hover:bg-gray-500 transition-colors"
          />
        </form>
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4 text-blue-600">
            Webpages Detected
          </h2>
          {/* Dummy data for webpages */}
          <ul className="list-disc list-inside">
            <li>Homepage - Scraped</li>
            <li>About Us - Pending</li>
            <li>Contact Us - Scraped</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SetupOrganization;
