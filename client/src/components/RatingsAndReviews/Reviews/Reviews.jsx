import React from 'react';
import ReviewsList from './ReviewsList';
import SortForm from './SortForm';

export default function Reviews({reviews, sortBy, setSortBy}) {
  return (
    <>
      <SortForm reviews={reviews} sortBy={sortBy} setSortBy={val => setSortBy(val)}/>
      <ReviewsList reviews={reviews} sortBy={sortBy} />
    </>
  )
}

