import React, { useEffect, useState } from "react";
import Header from "./Header";
import List from "./List";
import WithListLoading from "./withListLoading";
function WomensClothing() {
  const ListLoading = WithListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://fakestoreapi.com/products/category/women's clothing`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);
  return (
    <div>
      <div className="product-container">
        <Header />
        <br />
        <div className="container">
          <ListLoading isLoading={appState.loading} repos={appState.repos} />
        </div>
      </div>
    </div>
  );
}
export default WomensClothing;
