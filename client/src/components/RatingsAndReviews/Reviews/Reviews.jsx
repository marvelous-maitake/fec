import React, { useEffect, useState} from 'react';
import ReviewsList from './ReviewsList';
import SortForm from './SortForm';
import AddReview from './AddReview';
import {API_KEY} from '../../../config/config';
import axios from 'axios';

export default function Reviews({id}) {
  const [sortBy, setSortBy] = useState('relevant');
  const [reviews, setReviews] = useState(null);
  const [page, setPage] = useState(2);
  const [allReviews, setAllReviews] = useState(null);

  function getMoreReviews() {
    const newReviews = allReviews.slice(0, reviews.length + 2);
    setReviews(newReviews)
  }

  useEffect(() => {
    setPage(2);
    axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews?sort=${sortBy}&count=2&page=1&product_id=${id}`,
      {headers: {'content-type': 'application/json', 'authorization': API_KEY}})
        .then(res => setReviews(res.data.results))
        .catch(err => console.error(err))
    axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews?sort=${sortBy}&count=100000&page=1&product_id=${id}`,
      {headers: {'content-type': 'application/json', 'authorization': API_KEY}})
        .then(res => setAllReviews(res.data.results))
        .catch(err => console.error(err))
  }, [sortBy])

  return (
      <>
        {reviews && <SortForm reviews={reviews} sortBy={sortBy} setSortBy={val => setSortBy(val)} />}
        {reviews && <ReviewsList reviews={reviews} sortBy={sortBy} />}
        {reviews && <AddReview getMore={getMoreReviews} reviews={reviews} setReviews={setReviews} />}
      </>
  )
}

