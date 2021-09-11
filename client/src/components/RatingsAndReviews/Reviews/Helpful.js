import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  /* background: none;
  border: none */
  font-size: 12px;
`

const SmallFont = styled.div`
  font-size: 13px;
  padding-bottom: 15px;
`

export default function helpful({review}) {
  return (
    <SmallFont>
      <span>Helpful? <Button>Yes({review.helpfulness})</Button></span>
    </SmallFont>
  )
}