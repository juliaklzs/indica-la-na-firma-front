import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/login";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <Login />
            </div>
          }
        />
        <Route path="*" element={<></>} />
      </Routes>
    </Router>
  );
}
