import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 2%;
  z-index: 12;
`;

function Navbar({ toggleTheme, searchFunc }) {

  const [search, setSearch] = useState('');

  const searchProduct = async () => {
    const prod = await axios.get(`/products/${search}`);
    if (typeof prod.data === 'string') {
      alert('Invalid Product_id!');
      return;
    }
    searchFunc(search);
  }

  return (
    <Nav>
      <div>
        Logo <button onClick={() => toggleTheme()}>Toggle Theme</button>
      </div>
      <div>
        <input
          type="text"
          id="search"
          placeholder="Search by Product Id"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button id='searchButton' onClick={() => {
          document.getElementById('search').value = '';
          searchProduct();
        }}>Search</button>
      </div>
    </Nav>
  );
}

export default Navbar