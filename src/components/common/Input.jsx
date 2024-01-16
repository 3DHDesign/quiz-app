// src/components/common/Input.js
import React from 'react';

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border rounded px-4 py-2"
    />
  );
};

export default Input;
