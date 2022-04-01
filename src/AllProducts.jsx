import { useState, useEffect, Component } from "react";
import axios from "axios";
const axiosGet = {
  method: "get",
  url: "https://fakestoreapi.com/products",
};
class Allproducts extends Component {
  // const [data, setData] = useState(null);
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      price: "",
      category: "",
      description: "",
      image: "",
    };
  }
  componentDidMount() {
    axios(axiosGet).then((response) => {
      this.setState({
        data: response.data.items,
        id: response.data.id,
        // title: response.data.title,
        // price: response.data.price,
        // category: response.data.category,
        // description: response.data.description,
        // image: response.data.image,
      });
    });
    console.log(this.state);
  }

  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://fakestoreapi.com/products")
  //       .then((res) => {
  //         res.json();
  //       })
  //       .then((json) => {
  //         console.log(json);
  //       });
  //   }, []);

  //   return <div>{data}</div>;
  // }
  // function Allproducts() {
  //   const [data, setData] = useState(null);
  //   useEffect(() => {
  //     fetch("https://fakestoreapi.com/products")
  //       .then((res) => {
  //         res.json();
  //         return res.json();
  //       })
  //       .then((json) => console.log(json));
  //   }, []);
  //   //   constructor(props) {
  //   //     super(props);
  //   //     this.state = {
  //   //       id: "",
  //   //       title: "",
  //   //       price: "",
  //   //       category: "",
  //   //       description: "",
  //   //       image: "",
  //   //     };
  //   //   }
  render() {
    const { data } = this.state;
    console.log(this.state);
    return (
      <div>
        {data.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    );
  }
}
export default Allproducts;
