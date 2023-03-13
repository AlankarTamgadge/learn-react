import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#081938";
      showAlert("Dark Mode Activated", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#f8f9fa";
      showAlert("Dark Mode Deactivated", "danger");
    }
  };

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>
      <Navbar
        title="TextUtils"
        about="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container ">
        <TextForm heading="Enter Text Here" mode={mode} showAlert={showAlert}/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
