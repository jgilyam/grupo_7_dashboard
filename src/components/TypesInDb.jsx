
import React, { useState ,useEffect} from "react";
import TypesProduct from "./Types";
import "../assets/css/typesInDb.css";
<style>
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Lato:ital,wght@0,400;0,700;1,100;1,700&family=Poppins:ital,wght@0,100;0,300;0,400;1,200;1,300;1,400&family=Roboto:wght@100;400;500&display=swap');
</style>
  
function TypesInDb(){

    const [listadoTypes,setListadoTypes]= useState ([]);

    useEffect(() => {
        /* getTypes() */
        console.log("montoComponente")
        const endpoint = "http://localhost:4000/api/types";
        fetch(endpoint)
          .then((response) => response.json())
          .then(types => {
           setListadoTypes(types.data)
           console.log("jojojo", setListadoTypes);
           console.log("jojo22 ",types.data)
          })
          .catch((error) => console.log(error));
    },[])

    /* const error = console.log("esto es el listadoooo" ,listadoTypes) */
    const [totalType, setTotaltype] = useState([]);
  useEffect(() => {
    const endpoint = "http://localhost:4000/api/products";
    fetch(endpoint)
      .then((response) => response.json())
      .then((ram) => {
        setTotaltype([ram[0].data.countByCategory]);
        console.log("lallalalalal ",setTotaltype);
        console.log("lalala22 ,",[ram[0].data.countByCategory])
       
      })
      .catch((error) => console.log(error));
  }, []);
     console.log("mostrame 1,",listadoTypes)
    console.log("mostrame 2,",totalType[0])
    


    return (
      <React.Fragment>
        {/*<!-- Categories in DB -->*/}
        <div className="padre-containerTypeInDb">
          <div className="containerTypeInDb">
            <div className="card-header py-3">
              <h6
                /* onMouseOver={this.cambiarFondo} */ /* SOLUCION SIN ESTADO */
              >
               Categorias Productos
              </h6> 
            </div>
            {/*  <div className="card-body fondoCaja"> solucion sin estado*/}
            <div>
              <div className="container-row">
                {listadoTypes.map((types, index) => {
                  return <TypesProduct {...types} key={index} />;
                })}
              </div>
              {/* <div>{totalType[0].map((x, index) => {
                  return <TypesProduct {...x} key={index} />;
                })}</div> */}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
};


export default TypesInDb
