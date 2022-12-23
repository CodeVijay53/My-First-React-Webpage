import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Services from "./Component/Services";
import Contact from "./Component/Contact";
import Policy from "./Component/Policy";
import Footer from "./Component/Footer";
import Error from "./Component/Error";
import List from "./Component/List";

export default function App() {
  return (
    <>
      <List />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/policy" element={<Policy />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}
