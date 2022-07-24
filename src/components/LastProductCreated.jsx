import React, { useState, useEffect } from "react";
import "../assets/css/LastProductCreated.css";

function LastProductCreated() {
  /* const [id, setId] = useState("1") */
  /* let apu=["abc"]
  console.log(apu[0]) */
  const [producto, setProducto] = useState([]);
  const [detailProducto, setDetailProducto] = useState([]);
  useEffect(() => {
    const endpointProduct = "http://localhost:4000/api/products";

    fetch(endpointProduct)
      .then((response) => response.json())
      .then((data) =>
        setProducto(data[0].productos[data[0].productos.length - 1])
      );
  }, []);

  useEffect(() => {
    const endpointDetailProduct = producto.detail;
    fetch(endpointDetailProduct)
      .then((response) => response.json())
      .then((data) => setDetailProducto(data.data.producto));
  }, [producto]);

  return (
    <div className="box-father">
      <div className="element">
        <div className="box-title">
          <h3>Ultimo producto creado:</h3>
          <h4>{detailProducto.name}</h4>
        </div>

        <img src={detailProducto.imagen} alt="lastProduct" />

        <div className="description">
          <p>Descripción:{detailProducto.description}</p>
          <p>Categoria: {detailProducto.category}</p>
          <p>Stock: {detailProducto.stock}</p>
          <p>Tipo: {detailProducto.type}</p>
          <p>Precio:$ {detailProducto.price}</p>
          <p>Descuento: {detailProducto.discount}%</p>
        </div>
        {/* <a className="button" href="/">
          View product detail
        </a> */}
      </div>
    </div>
  );
}
export default LastProductCreated;
