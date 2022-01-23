import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
//pages
import Home from "./pages/Home/Home";
import Download from "./pages/Download/Download";

import "./App.scss";

export default function App() {
  return (
    <>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/download" element={<Download />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}
