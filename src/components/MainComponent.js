import React, { Component } from "react";
import Header from "./Header";
import Latest from "./Latest";
import Register from "./Portfolio";
import Happening from "./Happening";
import Footer from "./Footer";
import Partners from "./Partners";
import Baground from "./Baground";

class Main extends Component {
  render() {
    return (
      <div className="">
        <Header />
        <Happening />
        <Baground
          text=" We are a digital Creative agency.We Focus on design ,consulting,and
            technology"
        />
        <Latest />
        <Register />
        <Partners />
        <Footer />
      </div>
    );
  }
}

export default Main;
