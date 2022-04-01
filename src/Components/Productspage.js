import React, { useEffect, useState } from "react";
import Productcard from "./Productcard";
import { useParams } from "react-router-dom";
import WithListLoading from "./withListLoading";
import Header from "./Header";

const apiUrl = `https://fakestoreapi.com/products/`;
function Productspage(props) {
  const { id } = useParams();
  console.log(id);
  const ListLoading = WithListLoading(Productcard);
  const [product, setProduct] = useState(null);
  const fakeStore = async (id) => {
    const productData = await fetch(apiUrl + id).then((res) => res.json());
    setProduct(productData);
  };
  useEffect(() => {
    fakeStore(id);
  }, []);

  console.log("products", product);
  return (
    <div>
      <Header />
      <div className="product-container">
        <ListLoading repos={[product]} />
      </div>
    </div>
  );
}
export default Productspage;
