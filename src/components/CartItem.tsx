import React from 'react';
import { Item } from '../types/index';

interface Props {
  item: Item
}

const CartItem = ({ item }: Props) => {
  return(
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="p-3">
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>
    </div>
  );
}

export default CartItem;