import React from 'react';
import {Link} from 'react-router-dom'

export default function ProductCard({product}) {
  return (
    <Link to = {`/products/${product.id}`} className='productCard'>
        <img src={product.images[0]} alt={product.title} />
        <h4>{product.title}</h4>
        <p>Rs.{product.price}/-</p>
    </Link>
  )
}
