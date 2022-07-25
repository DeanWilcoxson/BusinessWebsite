import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Components/Pages/Parent/LandingPage";
import About from "./Components/Pages/Parent/About";
import Services from "./Components/Pages/Parent/Services";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}>
          Home
        </Route>
        <Route path="/About" element={<About />}>
          About
        </Route>
        <Route path="/" element={<Services />}>
          Services
        </Route>
      </Routes>
    </div>
  );
};
export default App;
