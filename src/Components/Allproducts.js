// import React from "react";

// class AllProducts extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//     };
//   }

//   componentDidMount() {
//     const apiUrl = "https://fakestoreapi.com/products";
//     fetch(apiUrl)
//       .then((response) => response.json())

//       .then((json) => console.log(json));
//   }
//   render() {
//     const { data } = this.state;
//     return (
//       <>
//         <h1>products</h1>;
//       </>
//     );
//   }
// }
// export default AllProducts;
import React, { useEffect, useState } from "react";

import List from "./List";
import WithListLoading from "./withListLoading";
function AllProducts() {
  const ListLoading = WithListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://fakestoreapi.com/products`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);
  return (
    <div>
      <div className="product-container">
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
    </div>
  );
}
export default AllProducts;
