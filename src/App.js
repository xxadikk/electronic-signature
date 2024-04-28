import React from "react";
import {BrowserRouter} from "react-router-dom";
import Routing from "./routing";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routing />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
