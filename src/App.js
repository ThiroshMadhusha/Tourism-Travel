import React from "react";
import "./App.css";
import About from "./Components/about/About";
import Blog from "./Components/blog/Blog";
import Footer from "./Components/footer/Footer";
import Home from "./Components/home/Home";
import Navbar from "./Components/navbar/Navbar";
import Offers from "./Components/offers/Offers";
import Popular from "./Components/popular/Popular";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Popular />
      <Offers />
      <About />
      <Blog />
      <Footer />
    </>
  );
};

export default App;
