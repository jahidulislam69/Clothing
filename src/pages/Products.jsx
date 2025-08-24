import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Filters from '../components/Filters';
import Sort from '../components/Sort';
import ProductGrid from '../components/ProductGrid';

const Products = () => {
  const { allProductData } = useContext(ShopContext);
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: '',
  });
  const [sort, setSort] = useState('default');

  const uniqueCategories = ['all', ...new Set(allProductData.map(product => product.category))];

  const filteredProducts = allProductData.filter(product => {
    if (filters.category !== 'all' && product.category !== filters.category) {
      return false;
    }
    // Add price range filtering logic here
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === 'price-asc') {
      return a.price - b.price;
    } else if (sort === 'price-desc') {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div className="container mx-auto flex flex-col gap-8 mt-30 sm:flex-row">
      <div className="sm:w-[20%] w-full mx-auto text-center sm:mx-0 flex flex-col gap-8">
        <Filters filters={filters} setFilters={setFilters} categories={uniqueCategories} />
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div className="sm:w-3/4 w-full">
        <ProductGrid products={sortedProducts} />
      </div>
    </div>
  );
};

export default Products;