import React, { useState, useEffect } from "react";
import "../assets/css/LastProductCreated.css";

function LastProductCreated() {
  /* const [id, setId] = useState("1") */
  /* let apu=["abc"]
  console.log(apu[0]) */
  const [producto, setProducto] = useState([]);
  const [detailProducto, setDetailProducto] = useState([]);
  useEffect(() => {
    const endpointProduct =
      "http://localhost:4000/api/products/?page=0&size=100";

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
        <div className="box-img">
        <img className="img" src={detailProducto.imagen} alt="lastProduct" />
        </div>
        <div className="description">
          <ul>
            <li>
              <p className="ContainerDetalleApi">Descripción: </p>
              <p className="detalleApi">{detailProducto.description}</p>
            </li>
           {/*  <li>
              <p></p>
            </li> */}
            <li>
              <p className="ContainerDetalleApi">Stock:  </p>
              <p className="detalleApi">{detailProducto.stock} Uni.</p>
            </li>
            {/* <li></li> */}
            <li>
              <p className="ContainerDetalleApi">Precio: </p><p className="detalleApi">${detailProducto.price}</p>
            </li>
            <li>
              <p className="ContainerDetalleApi">Descuento:</p><p className="detalleApi">{detailProducto.discount} %</p>
            </li>
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
