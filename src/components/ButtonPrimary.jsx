/*
@copyright 2024 by AKS
@license <Apache-2.0 
*/

import React from "react";

const ButtonPrimary = ({ label, icon, href }) => {
  return (
    <a
      href={href}
      download
      className="bg-blue-600 text-white px-5 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
    >
      <span className="material-icons">{icon}</span>
      {label}
    </a>
  );
};

export default ButtonPrimary;
