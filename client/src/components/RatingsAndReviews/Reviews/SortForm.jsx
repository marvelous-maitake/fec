import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  font-weight: bold;
  font-size: 120%
`

export default function SortForm({reviews, setSortBy, sortBy}) {

  function handleSortChange(e) {
    setSortBy(e.target.value);
  }

  return (
    <Form>
    <label>{reviews.length} reviews, sorted by </label>
    <select defaultValue={sortBy} onChange= {e => handleSortChange(e)}>
      <option value="relevant">relevance</option>
      <option value="newest">newest</option>
      <option value="helpful">helpfulness</option>
    </select>
    </Form>
  )
}
