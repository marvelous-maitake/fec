import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme, GlobalStyles } from "./theme/theme";

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'dark',
      product_id: 48432,
      current_selection: {},
      your_outfit: {}
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    const newTheme = this.state.theme === 'dark' ? 'light' : 'dark'
    this.setState({theme: newTheme});
  }

  render = () => (
    <ThemeProvider theme={this.state.theme === 'light' ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <div className="App">
          <Navbar toggleTheme={this.toggleTheme} />
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
          <div className='QandA'>Questions and Answers</div>
          <RatingsAndReviews id={this.state.product_id} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;