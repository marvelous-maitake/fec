import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

const ComparisonTable = (props) => {
  return (
    <table>
      <tr>
        <th>Person 1</th>
        <th>Person 2</th>
        <th>Person 3</th>
      </tr>
      <tr>
        <td>Emil</td>
        <td>Tobias</td>
        <td>Linus</td>
      </tr>
      <tr>
        <td>16</td>
        <td>14</td>
        <td>10</td>
      </tr>
    </table>
  );
};

export default ComparisonTable;