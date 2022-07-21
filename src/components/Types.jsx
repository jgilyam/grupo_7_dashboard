import React from "react";

function TypesProduct(props) {
  return (
    <React.Fragment>
      <div className="row-hijo">
        <div className="card text-white bg-dark  shadow">
          <div className="card-row">{props.name}</div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default TypesProduct;