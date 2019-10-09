import React from 'react';
import { Cart } from '../types/index';

interface Props {
  cart: Cart
}

const CartResult = ({ cart }: Props) => {

  return(
    <div>
      <p>No. of items : {cart.number}</p>
      <p>Sum : {cart.sum}</p>
    </div>
  );
}

export default CartResult;