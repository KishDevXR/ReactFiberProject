import React from "react";

const BackendControl = ({ isFloating, setIsFloating }) => {
  return (
    <div className="Floatbutton">
      <button
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          zIndex: 1000,
          padding: "10px 20px",
          background: isFloating ? "lightgreen" : "lightcoral",
          border: "1px solid #ccc",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => setIsFloating(!isFloating)}
      >
        {isFloating ? "Animate" : "Animate"}
      </button>
    </div>
  );
};

export default BackendControl;
