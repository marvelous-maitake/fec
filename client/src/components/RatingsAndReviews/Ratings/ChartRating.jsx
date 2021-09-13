import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding-bottom: 10px;
`

const OuterBar = styled.div`
  width: 100%;
  background-color: #dedede;
`;

const InnerBar = styled.div`
  padding-top: 3px;
  padding-bottom: 3px;
  width: ${props => props.size};
  background-color: black;
`;

export default function ChartRating({ratings}) {

  function getPercent(ratings, rate) {
    let max = 0;
    for (let k in ratings) {
      let count = Number(ratings[k])
      if (count > max) {
        max = count
      }
    }
    return String(Math.round((ratings[rate] || 0) / max * 100)) + '%'
  }


  return (
    <>
      <Container>
        5 Stars
        <OuterBar>
          <InnerBar size={getPercent(ratings, '5')}></InnerBar>
        </OuterBar>
      </Container>
      <Container>
        4 Stars
        <OuterBar>
          <InnerBar size={getPercent(ratings, '4')}></InnerBar>
        </OuterBar>
      </Container>
      <Container>
        3 Stars
        <OuterBar>
          <InnerBar size={getPercent(ratings, '3')}></InnerBar>
        </OuterBar>
      </Container>
      <Container>
        2 Stars
        <OuterBar>
          <InnerBar size={getPercent(ratings, '2')}></InnerBar>
        </OuterBar>
      </Container>
      <Container>
        1 Stars
        <OuterBar>
          <InnerBar size={getPercent(ratings, '1')}></InnerBar>
        </OuterBar>
      </Container>
    </>
  )
}