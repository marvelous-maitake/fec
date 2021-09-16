import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import FormIstics from './FormIstics';
import StarRatingReview from './StarRatingReview';

const Wrapper = styled.div`
  label {
    font-weight: bold;
  }

  span {
    font-weight: bold;
  }
`

const Recommend = styled.div`
`

const Star = styled.div`
`

const Body = styled.div`
`

export default function NewReviewForm({id}) {
  const [istics, setIstics] = useState(null);

  //form inputs
  const [rating, setRating] = useState(5);
  const [recommended, setRecommended] = useState(true);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [images, setImages] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [chars, setChars] = useState({});


  useEffect(() => {
    axios.get(`/reviews/meta?product_id=${id}`)
      .then(res => setIstics(res.data.characteristics))
      .catch(err => console.log(err));
  }, [])

  function onIsticChange(e) {
    const newObj = {[e.target.name] : e.target.value};
    setChars(chars => ({...chars, ...newObj}))
  }

  function handleSubmit(e) {
    console.log('rat', rating)
    console.log('rec', recommended);
    console.log('tit', title);
    console.log('bod', body);
    console.log('username', username);
    console.log('email', email);
    console.log('characteristics', chars)
    console.log('images', images[0])
    e.preventDefault();

  }

  return (
    <Wrapper>
      <h2>Write your review</h2>
      <form onSubmit={handleSubmit}>
        <div style={{paddingBottom: '20px'}}>
          <Recommend >
            <span>Do you recommend this product? </span>
            <label htmlFor="yes"> Yes</label>
            <input onChange={() => setRecommended(true)} id="yes" name="recommend" type="radio" defaultChecked/>
            <label htmlFor="no"> No</label>
            <input onChange={() => setRecommended(false)}id="no" name="recommend" type="radio" />
          </Recommend>
          <Star >
            <StarRatingReview onChange={setRating}/>
          </Star>
        </div>
        <div style={{paddingBottom: '20px'}}>
          {istics && <FormIstics istics={istics} onChange={onIsticChange}/>}
        </div>
        <div style={{paddingBottom: '20px'}}>
          <div>
            <label style={{display: 'block'}} htmlFor="title">Title: </label>
            <input onChange={(e) => setTitle(e.target.value)}style={{display: 'block'}} placeholder="Example: Best purchase ever!" type="text" id="title" size="32" required/>
          </div>
          <Body>
            <label style={{display: 'block'}} htmlFor="body">Review: </label>
            <textarea onChange={(e) => setBody(e.target.value)} style={{display: 'block'}} rows="5" cols="30" id="body" placeholder="Why did you like/dislike this product?" required/>
          </Body>
          <label htmlFor="images">Images: </label>
          <input id="images" type="file" multiple onChange={(e) => setImages(e.target.files)}/>
        </div>
        <div style={{paddingBottom: '20px'}}>
          <div>
            <label htmlFor="username">Username: </label>
            <input onChange={(e) => setUsername(e.target.value)} id='username' type="text" placeholder='Example: jshzglr' required></input>
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input onChange={(e) => setEmail(e.target.value)}id='email' type="email" placeholder='Example: josh@gmail.com' required></input>
          </div>
        </div>
        <div>
          <input type="submit" value="Submit"/>
        </div>
      </form>
    </Wrapper>
  )
}