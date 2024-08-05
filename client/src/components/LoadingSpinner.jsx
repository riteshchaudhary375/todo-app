import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center loaderSpinner">
      <div
        className="spinner-border"
        role="status"
        style={{ width: "5rem", height: "5rem" }}
      >
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
