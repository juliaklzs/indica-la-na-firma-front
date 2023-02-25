import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import JobSearch from "./pages/JobSearch";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Jobs" element={<JobSearch />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}
