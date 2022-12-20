import "./styles.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import ProductCart from "/ProductCart";
import { MyInputs } from "./form/MyInputs";

const url = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
  const [productData, setProductData] = useState([]);
  const fetchData = () => {
    return axios.get(url);
  };

  useEffect(() => {
    const result = fetchData();
    result.then((res) => {
      const { data } = res;
      setProductData(data);
    });
  }, []);
  return (
    <div>
      <>
        <MyInputs />
      </>
      <ProductCart productData={productData} />
    </div>
  );
}
