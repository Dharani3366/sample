import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Login";
import SignUp from "./Signup";
import Dashboard from "./Dashboard";
import Expense from "./Expense";
import Sevenupdown from "./Sevenupdown";
import Snakeandladder from "./Snakeandladder";
import Resume from "./Resume";
import Bmicalc from "./Bmicalc";
import Stopwatch from "./Stopwatch";

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />

        {/* Main App Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/sevenupdown" element={<Sevenupdown />} />
        <Route path="/snakeandladder" element={<Snakeandladder />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/bmicalc" element={<Bmicalc />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
      </Routes>
    </Router>
  );
}

export default App;
