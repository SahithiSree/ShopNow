import React from "react";
const Product = (props) => {
  const { repos } = props;

  return (
    <div>
      {repos.map((repo) => {
        return (
          <div key={repo.id} className="list">
            {repo.description}
          </div>
        );
      })}
    </div>
  );
};
export default Product;
