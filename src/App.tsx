import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';

import catalog from './static/catalog';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="flex mb-4">
        <div className="flex w-1/4 bg-gray-400 h-12">
          
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
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
