import React, { useState, useEffect } from "react";
import ProductsTotals from "./ProductsTotals";
import "../assets/css/productsTotals.css"

function Products() {
  const [productsOrder, setProductsOrder] = useState([]);
  useEffect(() => {
    const endpoint = "http://localhost:4000/api/products/?page=0&size=1000";
    fetch(endpoint)
      .then((response) => response.json())
      .then((ram) => {
        
        setProductsOrder(ram[0].data.productos);
      })
      .catch((error) => console.log(error));
  }, []);



  return (
    <div className="divPadre">
      {productsOrder.map((product, i) => {
        return (
            
          <ProductsTotals
            key={product.id}
            name={product.name}
            description={product.description}
            id={product.id}
          />
          
        );
      })}
    </div>
  );
}

export default Products;
