import React from 'react'
import { useAppContext } from '../contexts/AppProvider';

export default function ProductDetails({match , ...props}) {
  const {params} = match;
  const {id} = params;

  const {products} = useAppContext();

  const product = products.find( product => product.id == id);

  if(!product){
    return <p>No product foundd......</p>
  }

  return (
    <div>
      <p>Product Details : {id} </p>
      <img src={product.images[0]} alt={product.title} />
      <h3>{product.title}</h3>
      <h4>Rs {product.price}/-</h4>
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </div>
  )
}
