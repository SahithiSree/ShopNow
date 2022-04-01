// import React from "react";
import React from "react";
// import { Link } from "react-router-dom";
const Productcard = (props) => {
  const { repos } = props;

  return (
    <>
      {repos.map((repo) => {
        if (!repo) {
          return null;
        }
        return (
          <div className="Card">
            <div className="singleProduct-details">
              <img
                src={repo?.image}
                alt="product-details"
                height="500"
                width="400"
              />
            </div>
            <div className="singleProduct-details">
              <div className="product-price">${repo.price}</div>
              <br />
              <div className="product-title">{repo.title}</div>
              <br />
              <div className="product-category">{repo.category}</div>
              <br />
              <div className="product-description">{repo.description}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Productcard;
