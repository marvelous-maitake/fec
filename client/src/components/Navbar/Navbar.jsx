import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import Title from './Title';
import Logo from './Logo';
import Toggle from "react-toggle";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  z-index: 12;
  align-items: center;
  padding: 1%;
`;

const StyledMonkey = styled.div`
  font-size: 2em;
  cursor: pointer;
  transition: 0.3s;
  text-align: right;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`

function Navbar({ theme, toggleTheme, searchFunc }) {

  const [search, setSearch] = useState('');

  const searchProduct = async () => {
    const prod = await axios.get(`/products/${search}`);
    if (typeof prod.data === 'string') {
      alert('Invalid Product_id!');
      return;
    }
    searchFunc(search);
  }

  const isDarkTheme = theme === 'dark';

  return (
    <Nav>
      <div>
        <Logo />
      </div>
      <Title />
      <div>
      <div>
      {isDarkTheme ? <StyledMonkey onClick={toggleTheme}>🐵</StyledMonkey> : <StyledMonkey onClick={toggleTheme}>🙈</StyledMonkey>}
      </div>
        <input
          type="text"
          id="search"
          placeholder="Enter ID..."
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