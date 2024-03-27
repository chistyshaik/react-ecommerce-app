import React from 'react';
import { useAppContext } from '../contexts/AppProvider';

export default function CartDetails() {
  const { cartItems , cartProducts } = useAppContext();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Product Price</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => ( //array based cart manipulation 
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Product Price</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(cartProducts).map((item) => ( // object based cart manipulation
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
