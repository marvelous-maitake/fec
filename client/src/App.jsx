import React from "react";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme, GlobalStyles } from "./theme/theme";

import Overview from './components/Overview/Overview';
import Navbar from './components/Navbar/Navbar';
import RatingsAndReviews from './components/RatingsAndReviews/RatingsAndReviews';
import QAwidget from './components/Q&A/QAwidget'

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
    this.changeProdId = this.changeProdId.bind(this);
  }

  changeProdId(product_id) {
    this.setState({product_id});
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
          <Navbar toggleTheme={this.toggleTheme} searchFunc={this.changeProdId}/>
          <Overview product_id={this.state.product_id}/>
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
                // getListAnswers={getListAnswers}
                // getListQuestions={getListQuestions}
              />
          </div>
          <RatingsAndReviews id={this.state.product_id} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;