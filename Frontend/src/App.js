import React from "react";
import { AppContainer } from "./AppElements";
import { Routes, Route } from "react-router-dom";
import Landing from "./Components/Pages/Parent/LandingPage";
const App = () => {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Landing />}>
          Home
        </Route>
        <Route path="/" element={}>
          About
        </Route>
        <Route path="/" element={<Landing />}>
          Services
        </Route>
      </Routes>
      <Landing />
    </AppContainer>
  );
};
export default App;
