import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    window.location.href = "/portfolio.html";
  }, []);

  return null;
}

export default App;
