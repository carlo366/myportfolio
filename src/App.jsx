import React from "react";
import { Routes, Route } from "react-router-dom";
import Biodata from "./pages/Biodata";
import DetailSkill from "./pages/DetailSkill";
import Home from "./pages/Home";
import Skill from "./pages/Skill";
import Kemampuan from "/src/pages/Kemampuan"; // Import Kemampuan component

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/biodata" element={<Biodata />} />
      <Route path="/projek" element={<Skill />} />
      <Route path="/projek/:item" element={<DetailSkill />} />
      <Route path="/skill" element={<Kemampuan />} /> {/* Add route for Kemampuan */}
    </Routes>
  );
}
