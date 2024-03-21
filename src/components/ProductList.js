import React from 'react';
import ProductCard from './ProductCard';

export default function ProductList({products}) {
    console.log("products list comp" , products)
  return (
    <div>
      <h3>Products</h3>
      <div className='productsList'>
        {products.map( product => <ProductCard key= {product.id} product = {product}/>)}
      </div>
    </div>
  )
}
