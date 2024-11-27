import React from "react";

const Dropdown = ({ label, options, value, onChange }) => {
  return (
    <div className="dropdown">
      <label className="dropdown-label">{label}</label>
      <select
        className="dropdown-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>
          Select
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
