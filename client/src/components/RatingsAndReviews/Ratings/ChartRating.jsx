import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  background-color: #ddd;
`;

const Bar = styled.div`
  padding-top: 4px;
  padding-bottom: 4px;
  width: ${props => props.size};
  background-color: #3a3a3a;
`;

export default function ChartRating({ratings}) {

  function getPercent(ratings, rate) {
    let total = 0;
    for (let k in ratings) {
      total += Number(ratings[k]);
    }
    return String(Math.round(ratings[rate] / total * 100)) + '%'
  }


  return (
    <div style={{paddingRight: '40px'}}>
      5 Stars
      <Container>
        <Bar size={getPercent(ratings, '5')}></Bar>
      </Container>
      4 Stars
      <Container>
        <Bar size={getPercent(ratings, '4')}></Bar>
      </Container>
      3 Stars
      <Container>
        <Bar size={getPercent(ratings, '3')}></Bar>
      </Container>
      2 Stars
      <Container>
        <Bar size={getPercent(ratings, '2')}></Bar>
      </Container>
      1 Stars
      <Container>
        <Bar size={getPercent(ratings, '1')}></Bar>
      </Container>
    </div>
  )
}