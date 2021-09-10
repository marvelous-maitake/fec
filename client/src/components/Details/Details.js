import React from 'react';

export default function Details({ product_info }) {
  const perks = [
    'GMO and Pesticide-free',
    'Made with 100% Genetic Modification',
    'This is made up',
    'It doesn\'t matter'
  ]
  return (
    <div className='Details'>
      <div className='ProductDetails'>
        <h3>{product_info.slogan}</h3>
        <p>{product_info.description}</p>
      </div>
      <div className='ProductPerks'>
        {perks.map((perk, index) => (
          <p key={index}><span>&#10003;</span>  {perk}</p>
        ))}
      </div>
    </div>
  )
}