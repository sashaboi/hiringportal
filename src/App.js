import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage, Lost, MainDash } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<MainDash />} />
        <Route path="*" element={<Lost />} />
      </Routes>
    </div>
  );
}

export default App;
