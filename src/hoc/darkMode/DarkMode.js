import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocalState } from "./LocalSave";
import "./DarkMode.css";
import Power from "../../components/UI/Button/Power";

function Dark() {
  const [theme, setTheme] = useLocalState("theme", "light");

  return (
    <HelmetProvider>
      <Helmet>
        <body data-theme={theme} />
      </Helmet>

      <div
        className="theme-switch"
        onClick={() => setTheme((cur) => (cur === "light" ? "dark" : "light"))}
      >
        <Power theme={theme === "light" ? "power-dark" : "power-light"} />
      </div>
    </HelmetProvider>
  );
}
export default Dark;
