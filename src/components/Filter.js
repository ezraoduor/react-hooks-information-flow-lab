import React from 'react';

const Filter = ({ onCategoryChange }) => (
  <select onChange={onCategoryChange} data-testid="filter-select">
    <option value="Fruits">Fruits</option>
    <option value="Dairy">Dairy</option>
    <option value="Vegetables">Vegetables</option>
  </select>
);

export default Filter;
