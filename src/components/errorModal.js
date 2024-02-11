import React from "react";

function ErrorModal({ setError, error }) {
  return (
    <div className="modal">
      <div className="errorBox">
        <h1>Warning!</h1>
        <p>
          {error}
        </p>
        <button
          className="btn btn-alert"
          style={{ marginTop: "15px" }}
          onClick={() => {
            setError(false);
          }}
        >
          {" "}
          Close
        </button>
      </div>
    </div>
  );
}

export default ErrorModal;
