import React from "react";

const RadioButton = ({ name, options, value, handleChange }) => {
  return (
    <div className=" flex items-center space-x-4">
      {options.map((option) => (
        <label key={option.id} className="inline-flex items-center">
          <input
            type="radio"
            name={name}
            value={option.id}
            checked={value == option.id}
            onChange={handleChange}
            className="form-radio h-4 w-4 text-blue"
          />
          <span className="ml-2">{option.name}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
