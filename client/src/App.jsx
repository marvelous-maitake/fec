import React, { useState, useEffect } from 'react';
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme, GlobalStyles } from "./theme/theme";

import Overview from './components/Overview/Overview';
import Navbar from './components/Navbar/Navbar';
import RatingsAndReviews from './components/RatingsAndReviews/RatingsAndReviews';
import RelatedProducts from './components/RelatedProducts/RelatedProducts';
import RelatedProductsCarousel from './components/RelatedProducts/RelatedProductsCarousel';
import QAwidget from './components/Q&A/QAwidget';

import { ProductContext } from "./contexts/ProductContext";

function App() {
  const [theme, setTheme] = useState(() => 'dark');
  const [productId, setProductId] = useState(() => 48445);
  const [currentSelection, setCurrentSelection] = useState(() => {});
  const [currentOutfit, setCurrentOutfit] = useState(() => {});

  function changeProdId(product_id) {
    setProductId(product_id);
  }

  function toggleTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  return (
    <ThemeProvider theme={theme === 'light' ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <div className="App">
          <ProductContext.Provider value={{ productId }}>
          <Navbar toggleTheme={toggleTheme} searchFunc={changeProdId}/>
          <Overview product_id={productId}/>
          <RelatedProducts product_id={productId} />
            <div className='YourOutfit'>
              <div data-testid="App">Your Outfit</div>
            </div>
          <div className='QandA'>
            <QAwidget
                product_id={productId}
                // getListAnswers={getListAnswers}
                // getListQuestions={getListQuestions}
              />
          </div>
          <RatingsAndReviews id={productId} />
          </ProductContext.Provider>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;