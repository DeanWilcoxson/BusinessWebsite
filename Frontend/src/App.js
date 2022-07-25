import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Components/Pages/Parent/LandingPage";
import About from "./Components/Pages/Parent/About";
import Services from "./Components/Pages/Parent/Services";
import Auth from "./Components/Auth";
import NotFound from "./Components/Pages/Error";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}>
          Home
        </Route>
        <Route path="/about" element={<About />}>
          About
        </Route>
        <Route path="/services" element={<Services />}>
          Services
        </Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};
export default App;
