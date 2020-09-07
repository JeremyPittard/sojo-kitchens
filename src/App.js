import React from "react";
import "./App.scss";
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import "mailgo/dist/mailgo.min.js";
import ImageCallout from "./components/image-callout";
import About from "./partials/About";
import JuicerFeed from "./components/juicer";
import SojoMap from "./components/map";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <ImageCallout heading="Design" />
      <ImageCallout alignImage="left" heading="Manufacture" />
      <ImageCallout heading="Installation" />
      <JuicerFeed />
      <SojoMap />
      <Footer />
    </div>
  );
}

export default App;
