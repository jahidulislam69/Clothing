import React from 'react';

const Filters = ({ filters, setFilters, categories }) => {
  const handleCategoryChange = (e) => {
    setFilters({ ...filters, category: e.target.value });
  };

  return (
    <div>
      <h3 className='p-2 text-2xl font-bold prata-regular text-pink-900'>Filters</h3>
      <hr className='border-t-1 border-pink-900 w-[30%] mx-auto'/>
      <div>
        <h4 className='p-2 text-lg prata-regular font-bold'>Category</h4>
        <select value={filters.category} onChange={handleCategoryChange} className='border p-2 w-[60%] prata-regular'>
          {categories.map(category => (
            <option key={category} value={category} className='prata-regular capitalize'>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;