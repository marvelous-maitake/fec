import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  box-sizing: border-box;
  width: 90%;
  border: solid #000000 2px;
  padding: 5px;
  margin: 5px;
`;

const Search = ({ searchInput, handleSearchInput }) => {
  return (
    <div className="qa-search">
      <form
        onChange={e => handleSearchInput(e.target.value)}
        className="qa-search-form"
      >
        <Input
          className="qa-search-bar"
          placeholder="HAVE A  QUESTION? SEARCH FOR ANSWERS..."

        />
      </form>
    </div>
  );
};

export default Search;