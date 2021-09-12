import React from 'react';

export default function Details({ slogan, description }) {
  const perks = [
    'GMO and Pesticide-free',
    'Made with 100% Genetic Modification',
    'This is made up',
    'It doesn\'t matter'
  ]

  return (
    <div className='Details' style={{
      display: "flex",
      width: "96%",
      padding: "2%",
      gap: "1%"
    }}>
      <div className='ProductGeneralInfo' style= {{
        flex: "7",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        padding: "2%",
        borderRadius: "25px"
      }}>
        <h3>{slogan}</h3>
        <p>{description}</p>
      </div>
      <div className='ProductPerks' style={{
        flex: "3",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        padding: "2%",
        borderRadius: "25px"
      }}>
        {perks.map((perk, index) => (
          <p key={index}><span>&#10003;</span>  {perk}</p>
        ))}
      </div>
    </div>
  )
}