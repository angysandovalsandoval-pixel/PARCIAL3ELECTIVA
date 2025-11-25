import React, { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div style={{ 
      padding: "40px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gap: "20px",
    }}>
      {products.map((p) => (
        <div
          key={p.id}
          style={{
            border: "1px solid #e5e5e5",
            borderRadius: "10px",
            padding: "15px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            background: "#fff",
          }}
        >
          <img
            src={
              p.images?.[0] && p.images[0] !== ""
                ? p.images[0]
                : "https://via.placeholder.com/250"
            }
            alt={p.title}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />

          <h3 style={{ marginTop: "10px" }}>{p.title}</h3>

          <p style={{ fontSize: "14px" }}>{p.description}</p>

          <strong style={{ fontSize: "18px", color: "#2BB673" }}>
            ${p.price}
          </strong>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

