/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import CategoryListEntry from './CategoryListEntry.jsx';

const FilterByCategoryList = styled.ul`
  border-bottom: 1px solid #d8d9db;
  list-style-type: none;
  margin: 0 0 8px;
  margin-bottom: 12px;
`;

const CategoryList = () => {
  const categoriesArray = [
    {
      name: 'All',
    },
    {
      name: 'Food',
    },
    {
      name: 'Drink',
    },
    {
      name: 'Atmosphere',
    },
  ];
  const mappedCategories = categoriesArray.map((category, key) => {
    return (
      <CategoryListEntry
        name={category.name}
        key={`${category.name} ${key}`}
      />
    );
  });

  return (
    <FilterByCategoryList>
      {mappedCategories}
    </FilterByCategoryList>
  );
};

export default CategoryList;
