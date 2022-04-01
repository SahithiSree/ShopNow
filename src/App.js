import "./App.css";
// import React from "react";
import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jewelery from "./Components/Jewellery";
import Electronics from "./Components/Electronics";
import MensClothing from "./Components/MensClothing";
import WomensClothing from "./Components/WomensClothing";
import Homepage from "./Components/Homepage";
import Productspage from "./Components/Productspage";
import axios from "axios";
import NotFound from "./Components/NotFound";
var tokenID = {};

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState(false);

  console.log(username, password, token);

  return (
    <div>
      {auth ? (
        <></>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter your username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="Password"
            placeholder="Enter your Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setLoading(true);
              axios({
                method: "post",
                url: "https://fakestoreapi.com/auth/login",
                data: {
                  username: username,
                  password: password,
                },
              }).then((response) => {
                setToken(response.data.token);
                tokenID.token = response.data.token;

                setLoading(false);
                setAuth(true);
              });
            }}
          >
            Login
          </button>
        </>
      )}

      {loading && <>Loading...</>}
      {token && <Homepage />}
    </div>
  );
}
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/jewelery" element={<Jewelery />} />
          <Route path="/mensclothing" element={<MensClothing />} />
          <Route path="/womensclothing" element={<WomensClothing />} />
          <Route path="/product/:id" element={<Productspage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
