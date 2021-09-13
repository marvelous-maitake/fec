import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 2%;
  z-index: 12;
`;

function Navbar({ toggleTheme, searchProductId }) {

  const [search, setSearch] = useState('');

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
        <button>Search</button>
      </div>
    </Nav>
  );
}

export default Navbar