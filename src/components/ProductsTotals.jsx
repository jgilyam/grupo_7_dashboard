import React from "react";
import "../assets/css/productsTotals.css"

function ProductsTotals(props) {
  return (
    <div className="a">
      <article className="b">
        <img src="lopez" alt="fotico" className="imgg" />
        <div className="c">
          <h1 className="name">{props.name}</h1>
          <p className="description">{props.description}</p>
          <p className="id">{props.id}</p>
        </div>
      </article>
    </div>
  );
};

export default ProductsTotals;
