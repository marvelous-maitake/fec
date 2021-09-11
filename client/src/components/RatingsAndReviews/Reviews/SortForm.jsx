import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  padding-top: 40px;
  font-weight: bold;
`

export default function SortForm({reviews, sortBy, setSortBy}) {

  function handleSortChange(e) {
    setSortBy(e.target.value);
  }

  return (
    <Form>
    <label>{reviews.length} reviews, sorted by </label>
    <select onChange= {e => handleSortChange(e)}>
      <option value="relevant">relevance</option>
      <option value="newest">newest</option>
      <option value="helpful">helpfulness</option>
    </select>
    </Form>
  )
}
