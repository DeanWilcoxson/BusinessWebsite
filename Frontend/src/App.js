import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Components/Pages/Parent/LandingPage";
import About from "./Components/Pages/Parent/About";
import Packages from "./Components/Pages/Parent/Packages";
import Auth from "./Components/Auth";
import NotFound from "./Components/Pages/Global/Error";
import Topbar from "./Components/Layout/Topbar";
import Footer from "./Components/Layout/Footer";
import Templates from "./Components/Pages/Parent/Templates";
const App = () => {
  return (
    <div>
      <Router>
        <Topbar />
        <Routes>
          <Route path="/" element={<Landing />}>
            Home
          </Route>
          <Route path="/about" element={<About />}>
            About
          </Route>
          <Route path="/packages" element={<Packages />}>
            Packages
          </Route>
          <Route path="/templates" element={<Templates />}>
            Templates
          </Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};
export default App;
