import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewList from "./components/ApiComp/NewList"
import Navbar from "./components/responsive-sidebar/components/Navbar";
const App = () => {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const alertMessage = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#082c6c";
      toast("Dark mode enabled");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#f5f5f5";
      toast("light mode enabled");
    }
  };

  return (
    <>
      <div>
      <Navbar/>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;
