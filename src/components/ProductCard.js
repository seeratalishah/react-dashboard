import React from 'react'


function ProductCard(props) {
  return (
    <div className='product-card'>
        <img src={props.imgUrl} alt="" />
        <p>{props.title}</p>
        <span>{props.price}</span>
    </div>
  )
}

export default ProductCard