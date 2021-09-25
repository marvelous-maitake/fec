import React, { useState, useEffect } from 'react';
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme, GlobalStyles } from "./theme/theme";

import Overview from './components/Overview/Overview';
import Navbar from './components/Navbar/Navbar';
import RatingsAndReviews from './components/RatingsAndReviews/RatingsAndReviews';
import RelatedProducts from './components/RelatedProducts/RelatedProducts';
import QAwidget from './components/Q&A/QAwidget';
import Outfit from './components/Outfit/Outfit';

import { SharedContext } from './contexts/SharedContext';

function App() {
  const [theme, setTheme] = useState(() => 'dark');
  const [productId, setProductId] = useState(() => 48449);
  const [currentSelection, setCurrentSelection] = useState(() => {});
  const [currentOutfit, setCurrentOutfit] = useState(() => []);

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
          <SharedContext.Provider value={{ productId, setProductId, currentOutfit, setCurrentOutfit }}>
          <Navbar toggleTheme={toggleTheme} searchFunc={changeProdId}/>
          <Overview product_id={productId}/>
          <RelatedProducts />
          <Outfit />
          <div className='QandA'>
            <QAwidget
                product_id={productId}
              />
          </div>
          <RatingsAndReviews id={productId} />
          </SharedContext.Provider>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;