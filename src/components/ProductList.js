import React from 'react';
import ProductCard from './ProductCard';
import { useAppContext } from '../contexts/AppProvider';

export default function ProductList() {
  const {products} = useAppContext()
  return (
    <div>
      <h3>Products</h3>
      <div className='productsList'>
        {products.map( product => <ProductCard key= {product.id} product = {product}/>)}
      </div>
    </div>
  )
}
