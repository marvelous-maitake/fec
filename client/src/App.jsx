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

import Overview from './components/Overview/Overview';
import Navbar from './components/Navbar/Navbar';
import RatingsAndReviews from './components/RatingsAndReviews/RatingsAndReviews';
import RelatedProducts from './components/RelatedProducts/RelatedProducts';
import RelatedProductsCarousel from './components/RelatedProducts/RelatedProductsCarousel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 48445,
      current_selection: {},
      your_outfit: {}
    };
  }

  render = () => (
    <div className="App">
        <Navbar />
        <Overview product_id={this.state.product_id} getInfo={getProductInfo} getStyles={getProductStyles}/>
          <RelatedProducts product_id={this.state.product_id} />
        <div className='YourOutfit'>
          <div>Your Outfit</div>
        </div>
        <div className='QandA'>Questions and Answers</div>
        <RatingsAndReviews id={this.state.product_id} />
    </div>
  );
}

export default App;