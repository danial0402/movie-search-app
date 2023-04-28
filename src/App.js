import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import SingleMovie from "./Components/SingleMovie";
import "./App.css";
import Watch from "./Components/Watch";
import Download from "./Components/Download";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<SingleMovie />} />
      <Route path="/Watch" element={<Watch />} />
      <Route path="/Download" element={<Download />} />
      
    </Routes>
  );
};

export default App;