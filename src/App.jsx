import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import config from "./config.json";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
//pages
import Home from "./pages/Home/Home";
import Download from "./pages/Download/Download";
import Search from "./pages/Search/Search";

import "./App.scss";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar brandName={config.name} />

      <Routes>
        <Route path="/" element={<Home title={`Home - ${config.name}`} />} />
        <Route path="/download" element={<Download />} />
        <Route path="/search" element={<Search />} />
      </Routes>

      <Footer brandName={config.name} />
    </BrowserRouter>
  );
}
