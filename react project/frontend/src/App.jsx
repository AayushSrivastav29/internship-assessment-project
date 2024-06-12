import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Header from "./Pages/Header.jsx";
import GetQuote from "./Components/GetQuote.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col w-[100%] h-[100%] font-sans">
      <Header />
      <Navbar />
    </div>
  );
}

export default App;
