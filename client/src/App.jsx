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
import QAwidget from './components/Q&A/QAwidget.jsx';
import RatingsAndReviews from './components/RatingsAndReviews/RatingsAndReviews';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 48432,
      current_selection: {},
      your_outfit: {}
    };

    this.getListQuestions = getListQuestions.bind(this);
    this.getListAnswers = getListAnswers.bind(this);
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
          <div data-testid="App">Your Outfit Carousel</div>
        </div>
      </div>
      <div className='QandA'>
        <QAwidget
          product_id={this.state.product_id}
          getListAnswers={this.getListAnswers}
          getListQuestions={this.getListQuestions}
        />
      </div>
      <RatingsAndReviews id={this.state.product_id} />
    </div>
  );
}

export default App;