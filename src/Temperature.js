import React from "react";

export default function Temperature(props) {
  return (
    <div>
      <h2 className="temperature">{Math.round(props.celsius)}</h2>
      <span className="unit">°C</span>
    </div>
  );
}
