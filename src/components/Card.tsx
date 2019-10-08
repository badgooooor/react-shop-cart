import React from 'react';
import { Product } from '../types/index';

interface Props {
  product: Product;
  handlePush: Function;
}

const Card = ({ product, handlePush }: Props) => {
  function handleClick() {
    const sendingItem = {
      name: product.name,
      price: product.price
    };
    handlePush(sendingItem);
  }

  return(
    <div>
      <div className="flex-1 p-2 rounded overflow-hidden shadow-lg">
        <img 
          className="w-full"
          src={product.image} 
          alt="tank"
        ></img>
        <div>
          <div className="text-xs text-grey-600 uppercase font-bold">tank</div>
          <div className="font-bold text-gray-700 leading-snug">
            {product.name}
          </div>
          <div className="flex-1 text-sm text-gray-600">$ {product.price}</div>
        </div>
        <div>
          <button 
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;