import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import FormIstics from './FormIstics';

export default function NewReviewForm({id}) {
  const [istics, setIstics] = useState(null);

  useEffect(() => {
    axios.get(`/reviews/meta?product_id=${id}`)
      .then(res => setIstics(res.data.characteristics))
      .catch(err => console.log(err));
  }, [])

  return (
    <>
      <h1>Write your review</h1>
      <form>
        {istics && <FormIstics istics={istics}/>}
      </form>
    </>
  )
}