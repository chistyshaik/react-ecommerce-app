import React from 'react'
import { useAppContext } from '../contexts/AppProvider';
import UIButton from './UIButton';

export default function ProductDetails({match , ...props}) {
  const {params} = match;
  const {id} = params;

  const {productById, addProductToCart, cartProducts} = useAppContext();

  const product = productById[id];
  const cartProductInfo = cartProducts[id];

  if(!product){
    return <p>No product foundd......</p>
  }

  const {images, title, price, description} = product;
  const [mainImage] = images;

  const addCartItem = () => {
    addProductToCart(product);
    console.log('product added to cart', product);  
  }

  return (
    <>
    <div className='container mx-auto px-16 py-6'>
      <div className='flex gap-4'>
        <img src={mainImage} alt={title} className='w-1/3 rounded-lg'/>
        <div className='w-2/3 '>
          <div className='flex justify-between'>
            <h2 className='text-2xl font-semibold'>{title}</h2>
            <h3 className='text-xl font-semibold' >Quantity : {cartProductInfo ? cartProductInfo.quantity : 0 }</h3>
          </div>
          <p className='mt-2 text-gray-600'>{description}</p>
          <p className='mt-4 text-2xl'>Rs.{price}/-</p>
          <UIButton onClick = {addCartItem}>Add Product to Cart</UIButton>
        </div>
      </div>
      <div className='flex gap-8 mt-4'>
        {
          images.map((imageUrl)=>(<div key={imageUrl} className='w-1/5'>
            <img src={imageUrl} alt={title} className='w-full rounded border object-cover'/>
          </div>
          ))
        }
      </div>
      {/* <pre>{JSON.stringify(params, null, 2)}</pre> */}
    </div>
    </>
  )
}
