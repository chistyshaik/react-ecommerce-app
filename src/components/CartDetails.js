import React from 'react';
import { useAppContext } from '../contexts/AppProvider';
import UIButton from '../components/UIButton';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function CartDetails() {
  const {  cartProducts } = useAppContext();
  const products = Object.values(cartProducts);
  const history = useHistory();

  let total = 0;
  products.forEach(({price, quantity})=>(
    total = total + (price * quantity)
  ))

  const handlecheckout = () => {
    history.push('/checkout');
  }

  return (
    <div className='container mx-auto px-16 py-8'>
      <h2 className='text-xl font-semibold'>Cart Details</h2>
     {
      products.length > 0 ? <div>
        {products.map(({
          id,
          thumbnail,
          title,
          price,
          quantity
        }) => <div className='flex items-center gap-4 mb-4 pb-2 border-b-2 border-slate-400'>
          <img className = "w-40" src={thumbnail} alt={title} />
          <div className='flex-1'>
            <Link className='text-xl font-semibold' to= {`/products/${id}`} >{title}</Link>
            <p>{quantity == 1 ? price : `${quantity} x ${price} = ${quantity* price} /- `}</p>
          </div>
        </div>)
        }
      </div> : "Your cart is empty"
     }
     <h2 className='text-xl font-semibold' >Total Price : Rs {total} /- </h2>
     <UIButton onClick= {handlecheckout}>Proceed to checkout</UIButton>
    </div>
  );
}
