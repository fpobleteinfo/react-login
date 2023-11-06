import React from "react";

export const Alert = ({ error, msg, color }) => {
  return (
    <>
      {error ? (
        <div className="alert-area">
          <div className={`alert alert-${color}`} role="alert">
            {msg}
          </div>
        </div>
      ) : null}
    </>
  );
};
