import React, { useState } from 'react';

const FilterByCategory = ({ categories, onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <div>
      <h3>Filter by Category</h3>
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            className={category === selectedCategory ? 'active' : ''}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterByCategory;
