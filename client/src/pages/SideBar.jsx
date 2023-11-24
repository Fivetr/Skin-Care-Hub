import React, { useState } from 'react';
import Sidebar from './Sidebar';

const SideBar = () => {
  const [priceFilter, setPriceFilter] = useState({
    minPrice: '',
    maxPrice: '',
  });

  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = ['Category 1', 'Category 2', 'Category 3'];

  const handlePriceFilterChange = (newPriceFilter) => {
    setPriceFilter(newPriceFilter);
    // Add logic to update your main content based on the price filter
    // For now, we'll just log the selected price filter to the console.
    console.log('Selected Price Filter:', newPriceFilter);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // Add logic to update your main content based on the selected category
    // For now, we'll just log the selected category to the console.
    console.log('Selected Category:', category);
  };

  return (
    <div className="sidebar">
      <Sidebar
        onFilterChange={handlePriceFilterChange}
        onCategoryChange={handleCategoryChange}
        categories={categories}
      />
      {/* Main content goes here, and it can be filtered based on the price filter and selected category */}
    </div>
  );
};

export default SideBar;
