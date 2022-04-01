import React from "react";
import { Link } from "react-router-dom";
const List = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <div>
      {repos.map((repo) => {
        return (
          <div key={repo.id} className="list">
            <div class="card">
              <Link to={`/product/${repo.id}`}>
                <img
                  src={repo.image}
                  height="100"
                  width="100"
                  alt="product"
                ></img>
                <div className="product-details">
                  <div className="product-price">${repo.price}</div>
                  <div className="product-title">{repo.title}</div>

                  {/* <div class="product-rating">{repo.rating.rate}</div> */}
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default List;
