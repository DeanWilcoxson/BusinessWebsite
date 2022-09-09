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
import SinglePagePackage from "./Components/Pages/Packages/SPA";
import SinglePageData from "./Components/Pages/Packages/SPA/SPA_Data.js";
import ProfessionalPackage from "./Components/Pages/Packages/Professional";
import EnterprisePackage from "./Components/Pages/Packages/Enterprise";
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
            path="/packages/singlepageapp"
            element={<SinglePagePackage {...SinglePageData} />}
          ></Route>
          <Route
            path="/packages/enterprise"
            element={<EnterprisePackage />}
          ></Route>
          <Route
            path="/packages/professional"
            element={<ProfessionalPackage />}
          ></Route>
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
