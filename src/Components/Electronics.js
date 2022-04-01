import React, { useEffect, useState } from "react";
import Header from "./Header";
import List from "./List";
import WithListLoading from "./withListLoading";
function Electronics() {
  const ListLoading = WithListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://fakestoreapi.com/products/category/electronics`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);
  return (
    <div className="header">
      <div className="product-container">
        <Header />
        <div>
          <img
            src="/images/Electronics-home.png"
            alt="home-banner"
            height="600"
            width="1729"
          />
        </div>
        <div className="container">
          <ListLoading isLoading={appState.loading} repos={appState.repos} />
        </div>
      </div>
    </div>
  );
}
export default Electronics;
