import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Isla Mujeres" />
        <br />
        <footer>
          This project is coded by{" "}
          <a
            href="https://effulgent-gingersnap-c33a99.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Samantha Cabrera
          </a>{" "}
          on{" "}
          <a
            href="https://github.com/villa151/project-weather"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
