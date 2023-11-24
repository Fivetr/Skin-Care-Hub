import React from 'react';
import PriceFilter from './PriceFilter';
import FilterByCategory from './FilterByCategory';

const Sidebar = ({ onFilterChange, onCategoryChange, categories }) => {
  return (
    <div className="sidebar">
      <h2>Filter Options</h2>
      <PriceFilter onFilterChange={onFilterChange} />
      <FilterByCategory categories={categories} onCategoryChange={onCategoryChange} />
    </div>
  );
};

export default Sidebar;
