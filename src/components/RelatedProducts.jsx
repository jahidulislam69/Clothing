import React from 'react';
import { Link } from 'react-router-dom';

const RelatedProducts = ({ allProductData, productData }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6 ">
      {allProductData
        .filter(
          (item) =>
            item.category === productData.category && item.id !== productData.id
        )
        .slice(0, 4)
        .map((item) => (
          <div key={item.id} className="p-4 flex flex-col mt-6">
            <img
              className="w-full h-full object-cover"
              src={item.images[0]}
              alt={item.name}
            />
            <p className="mt-2">{item.name}</p>
            <p className="mt-2">${item.price.toFixed(2)}</p>
            
            <Link to={`/product/${item.id}`} >
              <button className="bg-black text-white px-6 py-3 text-sm active:bg-orange-500  mt-4">
              Learn More
            </button>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default RelatedProducts;