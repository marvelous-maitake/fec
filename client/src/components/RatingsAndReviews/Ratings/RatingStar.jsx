import React from 'react';
import styled from 'styled-components';

const Rating = styled.div`
  font-size: 40px;
  display: inline;
`

const Total = styled.div`
  font-size: 80%;
  display: block;
`

const Filled = styled.span`
  color: black;
`

const Empty = styled.span`
  color: #dedede;
`

export default function RatingStar({ratings}) {
  function getAverage(ratings) {
    let total = 0;
    let count = 0;
    for (let k in ratings) {
      total += (Number(k) * Number(ratings[k]))
      count += Number(ratings[k])
    }
    return [total, total / count];
  }

  const [total, average] = getAverage(ratings);

  return (
    <div>
      <Rating>{Math.round(average * 10) / 10}  </Rating>
      <span><Filled>{'★'.repeat(Math.round(average))}</Filled><Empty>{'★'.repeat(5 - Math.round(average))}</Empty>
      <Total><strong>{total}</strong> ratings</Total>
      </span>
    </div>
  )
}