import React from 'react';
import SmallCard from './SmallCard';
import "../assets/css/smallCard.css"


/* <!-- Total de Productos --> */

let productsInDB = {
    title: 'TOTAL DE PRODUCTOS',
    color: 'primary', 
    cuantity: 9,
    icon: 'fa-clipboard-list'
}

/* <!-- Total de Usuarios --> */

let totalUsers = {
    title:' TOTAL DE USUARIOS', 
    color:'success', 
    cuantity: '9',
    icon:'fa-user-check'
}

/* <!-- Total de categorias (Types) --> */

let totalTypes = {
    title:'TOTAL DE CATEGORIAS' ,
    color:'warning',
    cuantity:'9',
    icon:'fa-user-check'
}

let cartProps = [productsInDB, totalUsers, totalTypes];

function ContentRow(){
    return (
    
        <div className="row">
            
            {cartProps.map( (product, i) => {

                return <SmallCard {...product} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRow;