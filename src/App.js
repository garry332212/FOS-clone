import * as React from "react";
import Footer from "./components/Footer";
import { Home, Pricing } from "./components/pages";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import OurStory from "./components/pages/OurStory";

function App() {
  return (
    <>
      <Navbar />
      <div style={routesContainerStyle}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="our-story" element={<OurStory />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

const routesContainerStyle = {
  marginTop: "4.7rem", // height of  Navbar
};
