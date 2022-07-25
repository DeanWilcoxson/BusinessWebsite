import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Components/Pages/Parent/LandingPage";
import About from "./Components/Pages/Parent/About";
import Services from "./Components/Pages/Parent/Services";
import Auth from './Components/Auth'
import NotFound from './Components/NotFound'

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

        <Route path ="*" element={<NotFound />}>

        </Route>
        
        <Route path='/auth' element={<Auth />}>
        </Route>
      </Routes>
    </div>
  );
};
export default App;
