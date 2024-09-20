import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/ver2/ver2.js"; // UserPage 경로
import UserPage from "./pages/userPage.jsx"; // UserPage 경로
import Summer from "./pages/ver2/summer.jsx"; // Summer 페이지
import Spring from "./pages/ver2/spring.jsx"; // Spring 페이지
import Autumn from "./pages/ver2/autumn.jsx"; // Autumn 페이지
import Winter from "./pages/ver2/winter.jsx"; // Winter 페이지
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user/:userId" element={<UserPage />} />
        <Route path="/summer" element={<Summer />} />
        <Route path="/spring" element={<Spring />} />
        <Route path="/autumn" element={<Autumn />} />
        <Route path="/winter" element={<Winter />} />
      </Routes>
    </Router>
  );
}

export default App;
