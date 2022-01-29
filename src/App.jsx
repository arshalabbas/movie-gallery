import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import config from "./config.json";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
//pages
import Home from "./pages/Home/Home";
import Download from "./pages/Download/Download";

import "./App.scss";

export default function App() {
  return (
    <>
      <Navbar brandName={config.name} />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home title={`Home - ${config.name}`} />} />
          <Route path="/download" element={<Download />} />
        </Routes>
      </BrowserRouter>

      <Footer brandName={config.name} />
    </>
  );
}
