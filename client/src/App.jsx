import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme, GlobalStyles } from "./theme/theme";

import Overview from './components/Overview/Overview';
import Navbar from './components/Navbar/Navbar';
import RatingsAndReviews from './components/RatingsAndReviews/RatingsAndReviews';
import RelatedProducts from './components/RelatedProducts/RelatedProducts';
import QAwidget from './components/Q&A/QAwidget';
import Outfit from './components/Outfit/Outfit';
import Footer from './components/Footer';

import { SharedContext } from './contexts/SharedContext';

const StyledDivider = styled.div`
  display: flex;
  justify-content: center;
`

const StyledImg = styled.img`
  width: 25vw;
`

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

  const isDarkTheme = theme === 'dark';

  return (
    <ThemeProvider theme={theme === 'light' ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <div className="App">
          <SharedContext.Provider value={{ productId, setProductId, currentOutfit, setCurrentOutfit, theme }}>
          <Navbar theme={theme} toggleTheme={toggleTheme} searchFunc={changeProdId}/>
          <Overview product_id={productId}/>
          <br />
          <br />
          <br />
          <h2 style={{ textAlign: 'center' }}>you might also like...</h2>
          <StyledDivider>{isDarkTheme? <StyledImg src='https://i.imgur.com/ZC0BXZY.png' /> : <StyledImg src='https://i.imgur.com/EqtyDcb.png' />}</StyledDivider>
          <RelatedProducts />
          <br />
          <br />
          <br />
          <h2 style={{ textAlign: 'center' }}>your outfit</h2>
          <StyledDivider>{isDarkTheme? <StyledImg src='https://i.imgur.com/ZC0BXZY.png' /> : <StyledImg src='https://i.imgur.com/EqtyDcb.png' />}</StyledDivider>
          <Outfit />
          <br />
          <br />
          <br />
          <h2 style={{ textAlign: 'center' }}>have any questions?</h2>
          <StyledDivider>{isDarkTheme? <StyledImg src='https://i.imgur.com/ZC0BXZY.png' /> : <StyledImg src='https://i.imgur.com/EqtyDcb.png' />}</StyledDivider>
          <br />
          <div className='QandA'>
            <QAwidget
                product_id={productId}
              />
          </div>
          <br />
          <br />
          <br />
          <h2 style={{ textAlign: 'center' }}>reviews</h2>
          <StyledDivider>{isDarkTheme? <StyledImg src='https://i.imgur.com/ZC0BXZY.png' /> : <StyledImg src='https://i.imgur.com/EqtyDcb.png' />}</StyledDivider>
          <RatingsAndReviews id={productId} />
          <br />
          <br />
          <br />
          <Footer />
          </SharedContext.Provider>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;