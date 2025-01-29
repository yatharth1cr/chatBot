import React from "react";

function Button({ text, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white p-2 rounded ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
