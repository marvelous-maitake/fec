import React, { useEffect, useState} from 'react';
import ReviewsList from './ReviewsList';
import SortForm from './SortForm';
import AddReview from './AddReview';
import axios from 'axios';

export default function Reviews({id}) {
  const [sortBy, setSortBy] = useState('relevant');
  const [reviews, setReviews] = useState(null);
  const [page, setPage] = useState(1);
  const [allReviews, setAllReviews] = useState(null);

  function getMoreReviews() {
    axios.get(
      `/reviews?sort=${sortBy}&count=2&page=${page}&product_id=${id}`)
        .then(res => setReviews([...reviews, ...res.data.results]))
        .catch(err => console.error(err));
    setPage(page + 1)
  }

  useEffect(() => {
    setReviews(null);
    axios.get(
      `/reviews?sort=${sortBy}&count=2&page=1&product_id=${id}`)
        .then(res => setReviews(res.data.results))
        .catch(err => console.error(err));
    setPage(2)
  }, [sortBy])

  return (
      <>
        {reviews && <SortForm reviews={reviews} sortBy={sortBy} setSortBy={val => setSortBy(val)} />}
        {reviews && <ReviewsList reviews={reviews} sortBy={sortBy} />}
        {reviews && <AddReview getMore={getMoreReviews} reviews={reviews} setReviews={setReviews} />}
      </>
  )
}

