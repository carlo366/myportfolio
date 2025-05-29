import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Biodata from "./pages/Biodata";
import DetailSkill from "./pages/DetailSkill";
import Home from "./pages/Home";
import Skill from "./pages/Skill";
import Kemampuan from "./pages/Kemampuan";
import { Spinner } from "react-bootstrap"; // Import Spinner from react-bootstrap

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Simulate loading time
    }, 2000); // Set loading duration (2 seconds)
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-screen h-screen bg-gray-800">
        <div className="text-white text-2xl animate__animated animate__fadeIn animate__delay-1s">
          <Spinner animation="border" variant="light" />
          <p className="mt-4 animate__animated animate__fadeIn animate__delay-2s">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/biodata" element={<Biodata />} />
      <Route path="/projek" element={<Skill />} />
      <Route path="/projek/:item" element={<DetailSkill />} />
      <Route path="/skill" element={<Kemampuan />} />
    </Routes>
  );
}
