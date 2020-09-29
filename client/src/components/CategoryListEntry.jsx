/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const StyledList = styled.li`
  display: inline;
  font-family: Helvetica, Arial, sans-serif;
`;

const CateogryListButtons = styled.button`
  font-size: 14px;
  color: #2d333f;
  border: none;
  background-color: transparent;
  font-weight: 535;
  line-height: 1.15;
  margin-right: 16px;
  padding: 16px 0;
`;

const CategoryListEntry = ({ name }) => {
  return (
    <StyledList>
      <CateogryListButtons>
        {name}
      </CateogryListButtons>
    </StyledList>
  );
};

export default CategoryListEntry;
