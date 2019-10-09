import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import CartItem from './components/CartItem';

import catalog from './static/catalog';
import { Item } from './types';
import CartResult from './components/CartResult';

const App: React.FC = () => {
  const [shoppingList, setShoppingList] = useState([
    {
      name: "Italian Soda",
      price: 40
    }
  ]);

  function addToList(_item: Item) {
    setShoppingList([
      ...shoppingList,
      _item
    ]);
  }
  
  return (
    <div className="App">
      <Navbar />
      <div className="flex mb-4">
        <div className="flex flex-col w-1/4 bg-gray-400 p-3">
          <div className="flex-1">
            <p className="text-xl font-semibold">Cart</p>
          </div>
          <div className="flex-1">
            <CartResult 
              cart={{
                number: shoppingList.length,
                sum: shoppingList.reduce((a, b) => a + (b.price || 0), 0)
              }}
            />
          </div>
          <div className="flex-1">
            {
              shoppingList.map(item => (
                <CartItem 
                  item={{
                    name: item.name,
                    price: item.price
                  }}
                />
              ))
            }
          </div>
        </div>
        <div className="flex flex-wrap w-3/4 h-12 p-3">
          {
            catalog.map(product => (
              <Card
                product={{
                  name: product.name,
                  image: product.image,
                  price: product.price
                }}
                handlePush={addToList}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
