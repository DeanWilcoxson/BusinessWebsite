import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Components/Pages/LandingPage";
import About from "./Components/Pages/About";
import Packages from "./Components/Pages/Packages";
import Auth from "./Components/Admin/Auth";
import NotFound from "./Components/Pages/Error";
import Topbar from "./Components/Layout/Topbar";
import Footer from "./Components/Layout/Footer";
import Templates from "./Components/Pages/Templates";
import {
  PackagesSection,
  AdditionalServicesSection,
  ProcessesSection,
} from "./Components/Pages/Packages/PackagesData";
import { TemplatesSection } from "./Components/Pages/Templates/TemplateData";
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
          <Route
            path="/packages"
            element={
              <Packages
                {...PackagesSection}
                {...AdditionalServicesSection}
                {...ProcessesSection}
              />
            }
          >
            Packages
          </Route>
          <Route
            path="/templates"
            element={<Templates {...TemplatesSection} />}
          >
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
