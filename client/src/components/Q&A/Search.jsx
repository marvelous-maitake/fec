import React, { useState } from 'react';

const Search = () => {
  return (
    <div className="qa-search">
      <form className="qa-search-form">
        <input
          className="qa-search-bar"
          placeholder="HAVE A  QUESTION? SEARCH FOR ANSWERS..."
        />
      </form>
    </div>
  );
};

export default Search;