import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div id="header-container" className="header-container">
      <div className="col-3">
        <p className="title">
          <Link to="/homepage">ShopNow</Link>
        </p>
      </div>
      <div className="col-3">
        <ul className="menu">
          <li>
            {/* Electronics */}
            <Link to="/electronics">Electronics</Link>
          </li>
          <li>
            <Link to="/jewelery">Jewelery</Link>
          </li>
          <li>
            <Link to="/mensclothing">Men's Clothing</Link>
          </li>
          <li>
            <Link to="/womensclothing">Women's Clothing</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
