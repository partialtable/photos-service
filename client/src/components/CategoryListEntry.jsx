/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const CateogryListEntries = styled.li`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin-right: 16px;
  padding: 16px 0;
  display: inline;
`;

const CategoryListEntry = ({ name }) => {
  return (
    <CateogryListEntries>
      {name}
    </CateogryListEntries>
  );
};

export default CategoryListEntry;
