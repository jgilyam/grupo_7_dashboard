import React, { useState, useEffect } from "react";
import SmallCard from "./SmallCard";
import "../assets/css/smallCard.css";

import {
  faList,
  faUsers,
  faArrowDownWideShort,
} from "@fortawesome/free-solid-svg-icons";

/* <!-- Total de Productos --> */

let totalP = {
  title: "TOTAL DE PRODUCTOS",
  color: "primary",
  cuantity: "",
  icon: faList,
};

/* <!-- Total de Usuarios --> */

let totalU = {
  title: " TOTAL DE USUARIOS",
  color: "success",
  cuantity: "",
  icon: faUsers,
};

/* <!-- Total de categorias (Types) --> */

let totalT = {
  title: "TOTAL DE CATEGORIAS",
  color: "warning",
  cuantity: "",
  icon: faArrowDownWideShort,
};

let cartProps = [totalP, totalU, totalT];

function ContentRow() {
  const [totalUsers, setTotalUsers] = useState([]);
  useEffect(() => {
    const endpoint = "http://localhost:4000/api/user";
    fetch(endpoint)
      .then((response) => response.json())
      .then((meta) => {
        setTotalUsers(meta[0].count);
        console.log(meta);
      })
      .catch((error) => console.log(error));
  }, []);

  totalU.cuantity = totalUsers;

  const [totalProducts, setTotalProducts] = useState([]);
  useEffect(() => {
    const endpoint = "http://localhost:4000/api/products";
    fetch(endpoint)
      .then((response) => response.json())
      .then((meta) => {
        setTotalProducts(meta[0].data.count);
      })
      .catch((error) => console.log(error));
  }, []);
  totalP.cuantity = totalProducts;

  const [totalTypes, setTotalTypes] = useState([]);
  useEffect(() => {
    const endpoint = "http://localhost:4000/api/types";
    fetch(endpoint)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setTotalTypes(res.meta.total);
      })
      .catch((error) => console.log(error));
  }, []);
  totalT.cuantity = totalTypes;

  return (
    <div className="row1">
      {cartProps.map((product, i) => {
        return <SmallCard {...product} key={i} />;
      })}
    </div>
  );
}

export default ContentRow;
