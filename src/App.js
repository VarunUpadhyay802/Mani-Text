import "./App.css";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
// import About from './Components/About';
function App() {
  const [mode, setMode] = useState("light"); //it will tell whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); //we are not naming below funcion to be set alert because that
  // below functio we are using for another purpose, that show alert we are using for type and message so that
  // through bootstarp we can get different different alert and set alert we are using only to set the alert variablr
  //jab bhi set aata hai,means const alert , set vala set, In starting we use round brackets then inside if we want to use it for
  // object then we can do so by curly
  //so first alert was null, and now it is a object which is of type and msg
  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode has Been Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has Been Enabled", "success");
    }
  };
  return (
    <>
      <Navbar title={"texttutils"} mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}   />
      <div className="container">
        <TextForm
          heading={"Enter the text to analyze"}
          mode={mode}
          toggleMode={toggleMode}
          showAlert={showAlert}
        />
      </div>
    </>
  );
}

export default App;
