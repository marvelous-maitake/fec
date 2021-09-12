import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
  font-size: 40px;
`

const StyledS = styled.span`
  font-size: 15px;
  height: 50%
`

export default function RatingStar({ratings}) {
  function getAverage(ratings) {
    let total = 0;
    let count = 0;
    for (let k in ratings) {
      total += (Number(k) * Number(ratings[k]))
      count += Number(ratings[k])
    }
    return total / count;
  }

  const average = getAverage(ratings);

  return (
    <div>
      <StyledSpan>{Math.round(average * 10) / 10}  </StyledSpan>
      <StyledS>{'★'.repeat(Math.round(average))+'☆'.repeat(5 - Math.round(average))}</StyledS>
    </div>
  )
}