import React, { useState } from 'react';
import { StarIcon } from 'lucide-react';
import { trackAddToCart } from '@/assets/pixel';

const ProductDisplay = ({ productData }) => {
  const [thumbnail, setThumbnail] = useState(productData.images[0]);
  const [selectSize, setSelectSize] = useState(null);

  const handleAddToCart = () => {
    // Trigger Facebook Pixel AddToCart
    trackAddToCart(productData, selectSize);

    // 🔹 Then proceed with your actual cart logic
    console.log("Product added to cart:", productData.name, productData.price);
  };

  return (
    <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
      {/* product images */}
      <div className="flex-1 flex flex-col-reverse sm:flex-row gap-3">
        <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
          {productData.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Product image ${index + 1}`}
              onClick={() => setThumbnail(img)}
              className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
            />
          ))}
        </div>
        <div className="w-full sm:w-[80%]">
          <img src={thumbnail} alt="Product" className="w-full h-auto" />
        </div>
      </div>
      {/* product details */}
      <div className="flex-1">
        <h1 className="font-medium text-4xl mt-2">{productData.name}</h1>
        <StarIcon className="inline-block text-yellow-500 mt-" />
        <span className="text-yellow-500 ml-1 mt-">{productData.rating}</span>
        <span className="text-gray-500 ml-2 mt-">
          ({productData.reviews.length} reviews)
        </span>
        <h2 className="text-2xl font-bold mt-4">
          ${productData.price.toFixed(2)}
        </h2>
        <p className="text-gray-600 mt-4 w-[80%]">
          {productData.description}
        </p>
        <div className="flex flex-col gap-4 my-8">
          <p>Select Size</p>
          <div className="flex gap-2">
            {productData.sizes.map((size, index) => (
              <button
                key={index}
                onClick={() => setSelectSize(size)}
                className={`border border-gray-100 rounded px-4 py-2 hover:bg-gray-100 transition-colors 
                  ${selectSize === size ? "border-orange-500" : ""}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <button onClick={handleAddToCart} className="bg-black text-white px-8 py-3 text-sm active:bg-orange-500">
          Add To Cart
        </button>
        <hr className="mt-8 sm:w-4/5" />
        <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
          <p>100% Original Product</p>
          <p>Pay on delivery available</p>
          <p>Easy 30 days returns and exchanges</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;