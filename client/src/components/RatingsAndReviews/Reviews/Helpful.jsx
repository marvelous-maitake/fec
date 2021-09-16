import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';


const Button = styled.button`
  font-size: 12px;
`

const SmallFont = styled.div`
  font-size: 14px;
  padding-bottom: 15px;
`

export default function helpful({review}) {

  const [helpfulCount, setCount] = useState(review.helpfulness)

  function handleClick(e) {
    axios.put(`/reviews/${review.review_id}/helpful`, null)
      .then(() => setCount(helpfulCount => helpfulCount + 1))
      .catch(err => console.log(err));
  }

  function handleReport(e) {
    axios.put(`/reviews/${review.review_id}/report`, null)
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }

  return (
    <SmallFont>
      <span>Helpful?
        <Button onClick={handleClick}>Yes ({helpfulCount})</Button>
        <Button onClick={handleReport}>Report</Button>
      </span>
    </SmallFont>
  )
}