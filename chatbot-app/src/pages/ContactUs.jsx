import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-white">
      <div className="flex flex-col md:flex-row items-start w-full">
        <div className="flex flex-col w-full md:w-1/2 mb-4 md:mb-0">
          <h1 className="text-3xl font-bold mb-4">CONTACT US</h1>
          <p className="text-lg mb-4">
            Love to Hear from You, Get in Touch 😊✨
          </p>
          <p className="text-lg mb-4">
            Please write to dummy@gmail.com and we'll get back to you real soon!
          </p>
          <form className="flex flex-col w-full max-w-md mb-4">
            <input
              type="email"
              name="email"
              placeholder="Enter your business email"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="p-3 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Subscribe
            </button>
          </form>
          <p className="text-lg mb-4">
            You can also whatsapp us by clicking here.
          </p>
          <p className="text-lg mb-4">Whatsapp number: dummy number</p>
          <p className="text-lg mb-4">
            BeyondChats is fully owned and operated by Paran Ventures Private
            Limited.
          </p>
          <p className="text-lg mb-4">Operational Address: dummy address</p>
        </div>
        <div className="flex justify-center w-full md:w-1/2">
          <img
            src="https://beyondchats.com/wp-content/uploads/2024/01/Untitled-design-2.png"
            alt="Contact Us"
            className="w-full md:w-2/3 mb-4 md:mb-0"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
