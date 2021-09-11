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
import Details from './components/Details/Details.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 48432,
      current_selection: {},
      your_outfit: {},
      product_info: {},
      product_styles: {}
    };
    this.getProductInfo = getProductInfo.bind(this);
    this.getProductStyles = getProductStyles.bind(this);
    this.getRelatedProducts =getRelatedProducts.bind(this);
    this.getListReviews = getListReviews.bind(this);
    this.getReviewMeta = getReviewMeta.bind(this);
    this.getListQuestions = getListQuestions.bind(this);
    this.getListAnswers = getListAnswers.bind(this);
  }

  componentDidMount = () => {
    // const id = this.state.product_id;
    // Promise.all([
    //   this.getProductInfo(id),
    //   this.getProductStyles(id)
    // ])
    // .then(([product_info, product_styles]) => {
    //   console.log('In then...');
    //   this.setState({
    //     'product_id': product_info.id,
    //     product_info,
    //     product_styles
    //   });
    //   return product_info;
    // })

    // this.getRelatedProducts(this.state.product_id);
    // this.getListReviews({'product_id': this.state.product_id, "sort": "newest"});
    // this.getReviewMeta(this.state.product_id);
    // this.getListQuestions({'product_id': this.state.product_id});
    // this.getListAnswers(338919);
  }

  render = () => (
    <div className="App">
      {/*<div className='Navbar'>
        Navbar
      </div>
      <div className='Announcement'>Announcement</div>
      <Overview product_info={this.state.product_info} product_styles={this.state.product_styles}/>
      <Details product_info={this.state.product_info}/>
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
      <div className='RatingsAndReviews' >Ratings and Reviews</div> */}
    </div>
  );
}

export default App;