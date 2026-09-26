import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Kids from "./pages/Kids";
import Men from "./pages/Men";
import Women from "./pages/Women";
import PageNotFound from "./pages/PageNotFound";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/product" element={<Product />}>
          <Route path="kids" element={<Kids />} />
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;