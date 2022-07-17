import React from 'react';
import SmallCard from './SmallCard';


/* <!-- Total de Productos --> */

let productsInDB = {
    title: 'Total de Productos',
    color: 'primary', 
    cuantity: 9,
    icon: 'fa-clipboard-list'
}

/* <!-- Total de Usuarios --> */

let totalUsers = {
    title:' Total de Usuarios', 
    color:'success', 
    cuantity: '9',
    icon:'fa-user-check'
}

/* <!-- Total de categorias (Types) --> */

let totalTypes = {
    title:'Total de Categorias' ,
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