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
        setProducto(data[0].data.productos[data[0].data.productos.length - 1])
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
          
          <ul>
            <li><p>Descripción: {detailProducto.description}</p></li>
            <li><p>Categoria: {detailProducto.category}</p></li>
            <li><p>Stock: {detailProducto.stock}</p></li>
            <li><p>Tipo: {detailProducto.type}</p></li>
            <li><p>Precio:$ {detailProducto.price}</p></li>
            <li><p>Descuento: {detailProducto.discount}%</p></li>
          </ul>
        </div>
        {/* <a className="button" href="/">
          View product detail
        </a> */}
      </div>
    </div>
  );
}
export default LastProductCreated;
