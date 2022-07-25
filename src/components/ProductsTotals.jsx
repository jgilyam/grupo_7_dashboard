import React from 'react'

export const ProductsTotals = (props) => {
  return (
    <div>
        <h1>{props.name}</h1>
        <h2>{props.description}</h2>
        <h3>{props.id}</h3>
    </div>
  )
}

export default ProductsTotals