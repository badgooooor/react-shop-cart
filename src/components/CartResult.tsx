import React from 'react';
import { Cart } from '../types/index';

interface Props {
  cart: Cart
}

const CartResult = ({ cart }: Props) => {

  return(
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <p>No. of items : {cart.number}</p>
      <p>Sum : {cart.sum}</p>
    </div>
  );
}

export default CartResult;