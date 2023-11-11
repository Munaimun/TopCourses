import React from "react";
import "./Spinner.css"; // You need to create a corresponding CSS file for styling

const Spinner = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;
