
import React, { useState ,useEffect} from "react";
import TypesProduct from "./Types";
  
function TypesInDb(){

    const [listadoTypes,setListadoTypes]= useState ([]);

    useEffect(() => {
        console.log("montoComponente")
    const endpoint = "/api/types";
    fetch(endpoint)
      .then((response) => response.json())
      .then(types => {
       setListadoTypes(types.data);
      })
      .catch((error) => console.log(error));
    },[])

    return (
      <React.Fragment>
        {/*<!-- Categories in DB -->*/}
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6
                /* onMouseOver={this.cambiarFondo} */ /* SOLUCION SIN ESTADO */
              >
               Typos en Db
              </h6> 
            </div>
            {/*  <div className="card-body fondoCaja"> solucion sin estado*/}
            <div
            >
              <div className="row">
                {listadoTypes.map((types, index) => {
                  return <TypesProduct {...types} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
};


export default TypesInDb
