import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./login";



function App() {
  const [count, setCount] = useState(0);
  const [showbtn, setShowbtn] = useState(false);
  const [name, setName] = useState({ name: "", phone: "", pass: "" });
  const handleChange = (e) => {
    // setName(e.target.value)
    setName({ ...name, [e.target.name]: e.target.value });
  };

  return (
    <>
    <Login />
      
    </>
  );
}

export default App;
