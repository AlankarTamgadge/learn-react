import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#081938'
    } else {
      setMode("light");
      document.body.style.backgroundColor = '#f8f9fa'
    }
  }
  return (
    <>
      <Navbar title="TextUtils" about="About"  mode={mode} toggleMode={toggleMode}/>
      <div className="container ">
        <TextForm heading="Enter Text Here" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
