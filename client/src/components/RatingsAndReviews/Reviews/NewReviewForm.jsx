import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import FormIstics from './FormIstics';

export default function NewReviewForm({id}) {
  const [istics, setIstics] = useState(null);

  const attributes = {
    Fit: ['Too small', 'Perfect', 'Too large'],
    Length: ['Too short', 'Perfect', 'Too long'],
    Comfort: ['Poor', 'Okay', 'Perfect'],
    Quality: ['Poor', 'Okay', 'Perfect'],
    Size: ['Too small', 'Perfect', 'Too large'],
    Width: ['Too narrow', 'Perfect', 'Too wide']
  }

  useEffect(() => {
    axios.get(`/reviews/meta?product_id=${id}`)
      .then(res => setIstics(res.data.characteristics))
      .catch(err => console.log(err));
  }, [])

  return (
    <h1>Write your review</h1>
  )
}