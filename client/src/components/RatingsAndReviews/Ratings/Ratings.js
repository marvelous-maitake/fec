import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RatingStar from './RatingStar';
import ChartRating from './ChartRating';
import {API_KEY} from '../../../config/config';

export default function Ratings({id}) {
  const [meta, setMeta] = useState(null);

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta?product_id=${id}`, {headers: {'content-type': 'application/json', 'authorization': API_KEY}})
      .then(res => setMeta(res.data))
      .catch(err => console.log(err));
  }, [id])

  function getRecommended(meta) {
    let t = Number(meta.recommended.true);
    let f = Number(meta.recommended.false);
    return Math.round(((t / (t + f)) * 100));
  }

  return (
    <>
      <h4>RATINGS & REVIEWS</h4>
      {meta && <RatingStar ratings={meta.ratings}/>}
      <br></br>
      {meta && <div>{getRecommended(meta)}% of reviews recommend this product</div>}
      <br></br>
      {meta && <ChartRating ratings={meta.ratings}/>}
    </>
  );
}
