import React from 'react';
import styled from 'styled-components';

export default function StarsGraphic({review}) {
  return (
    <>
      <span>{'★'.repeat(review.rating)+'☆'.repeat(5 - review.rating)}</span>
    </>
  )
}