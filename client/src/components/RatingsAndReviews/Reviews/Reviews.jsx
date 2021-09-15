import React, { useEffect, useState} from 'react';
import ReviewsList from './ReviewsList';
import SortForm from './SortForm';
import AddReview from './AddReview';
import axios from 'axios';

export default function Reviews({id}) {
  const [sortBy, setSortBy] = useState('relevant');
  const [reviews, setReviews] = useState(null);
  const [allReviews, setAllReviews] = useState(null);

  function getMoreReviews() {
    const newReviews = allReviews.slice(0, reviews.length + 2);
    setReviews(newReviews);
  }

  useEffect(() => {
    axios.get(
      `/reviews?sort=${sortBy}&count=2&page=1&product_id=${id}`)
        .then(res => setReviews(res.data.results))
        .catch(err => console.error(err));
    axios.get(
      `/reviews?sort=${sortBy}&count=1000&page=1&product_id=${id}`)
        .then(res => setAllReviews(res.data.results))
        .catch(err => console.error(err));
  }, [sortBy, id])

  return (
      <>
        {reviews && <SortForm reviews={reviews} sortBy={sortBy} setSortBy={val => setSortBy(val)} />}
        {reviews && <ReviewsList reviews={reviews} sortBy={sortBy} />}
        {reviews && <AddReview getMore={getMoreReviews} reviews={reviews} setReviews={setReviews} id={id}/>}
      </>
  )
}

