import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { trackProductView } from '@/assets/pixel';

const ProductGrid = ({ products }) => {
  const handleProductClick = (product) => {
    trackProductView(product);
  };

  return (
    <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <Card key={product.id} className="border-none hover:scale-[1.03] transition-transform duration-300 text-center">
          <Link to={`/product/${product.id}`} onClick={() => handleProductClick(product)}>
            <CardHeader>
              <img
                className="w-full sm:h-[400px] object-cover rounded-lg h-[180px]"
                src={product.images[0]} // Using the first image from the array
                alt={product.name}
              />
            </CardHeader>
            <CardContent>
              <CardTitle>{product.name}</CardTitle>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default ProductGrid;