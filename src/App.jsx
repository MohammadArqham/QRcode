import { useState } from "react";
import "./App.css";
import QRCode from "react-qr-code";
import Generator from "./components/Generator";
import Scanner from "./components/Scanner";

function App() {
  
  return (
    <>
      <Scanner/>
      <Generator/>
    </>
  );
}

export default App;
