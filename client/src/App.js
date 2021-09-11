import React from 'react';


import {
  getProductInfo,
  getProductStyles,
  getRelatedProducts,
  getListReviews,
  getReviewMeta,
  getListQuestions,
  getListAnswers
} from './helpers/apiHelpers.js';

import Overview from './components/Overview/Overview.js';
import Navbar from './components/Navbar/Navbar.js';
import RatingsAndReviews from './components/RatingsAndReviews/RatingsAndReviews.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 48432,
      current_selection: {},
      your_outfit: {}
    };
  }

  render = () => (
    <div className="App">
      <Navbar />
      <Overview product_id={this.state.product_id} getInfo={getProductInfo} getStyles={getProductStyles}/>
      <div className='Carousels'>
        <div>Carousels</div>
        <div className='RelatedProducts'>
          <div>Related Products Carousel</div>
        </div>
        <div className='YourOutfit'>
          <div>Your Outfit Carousel</div>
        </div>
      </div>
      <div className='QandA'>Questions and Answers</div>
      <RatingsAndReviews id={this.state.product_id} />
    </div>
  );
}

export default App;