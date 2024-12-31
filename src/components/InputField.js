import React from "react";

const InputField = ({ label, type, value, onChange }) => {
  return (
    <div style={{ marginBottom: "16px" }}>
      <label style={{ display: "block", marginBottom: "8px" }}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        style={{
          padding: "8px",
          width: "100%",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
};

export default InputField;