/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const StyledList = styled.li`
  display: inline;
  font-family: Helvetica, Arial, sans-serif;
`;

const AllButton = styled.button`
font-size: 14px;
color: #2d333f;
border: none;
background-color: transparent;
font-weight: 535;
line-height: 1.15;
margin-right: 16px;
padding: 16px 0;
border-bottom: 2px solid red;

&:hover {
  color: red;
}
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

  &:hover {
    color: red;
    border-bottom: 2px solid red;
  }
`;

const CategoryListEntry = ({ name }) => {
  return (
    <StyledList>
      <AllButton id="all-btn">
        All
      </AllButton>
      <CateogryListButtons>
        {name}
      </CateogryListButtons>
    </StyledList>
  );
};

export default CategoryListEntry;
