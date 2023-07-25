import React from "react";
import routes from "./routes";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Intro from "./pages/Intro";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.about} element={<About />} />
        <Route path={routes.intro} element={<Intro />} />
        <Route path={routes.experience} element={<Experience />} />
        <Route path={routes.projects} element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
