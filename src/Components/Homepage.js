import React from "react";
import Header from "./Header";
import Home from "./home";
import AllProducts from "./Allproducts";
function Homepage() {
  return (
    <div className="Homepage">
      <Header />
      <Home />
      <br />
      <br />
      <br />
      <AllProducts />
    </div>
  );
}
export default Homepage;
