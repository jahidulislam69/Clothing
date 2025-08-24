import React from 'react';

const Sort = ({ sort, setSort }) => {
  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <div>
      <h3 className='p-2 text-lg prata-regular font-bold'>Sort By</h3>
      <select value={sort} onChange={handleSortChange} className='border p-2 w-[60%] prata-regular'>
        <option value="default" className='prata-regular '>Default</option>
        <option value="price-asc" className='prata-regular '>Price: Low to High</option>
        <option value="price-desc" className='prata-regular '>Price: High to Low</option>
      </select>
    </div>
  );
};

export default Sort;