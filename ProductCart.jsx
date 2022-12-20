import React from "react";

export default function ProductCart({ productData }) {
  return (
    <>
      <h1 style={{ marginLeft: "70px" }}>Hello Api</h1>;
      <ul>
        {productData.length === 0 ? (
          <span>Sorry No data found!</span>
        ) : (
          productData.map((item) => {
            return (
              <li>
                <h4> Title : {item.title}</h4>
                <p style={{ color: "red" }}>{item.body}</p>
              </li>
            );
          })
        )}
      </ul>
    </>
  );
}
