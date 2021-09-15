import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

export default function IsticsForm({istics}) {

  const attributes = {
    Fit: ['Too small', 'Small', 'Perfect', 'Large', 'Too large'],
    Length: ['Too short', 'Short', 'Perfect', 'Long', 'Too long'],
    Comfort: ['Poor', 'Below Average', 'Okay', 'Above average', 'Perfect'],
    Quality: ['Poor', 'Below average', 'Okay', 'Above average', 'Perfect'],
    Size: ['Too small', 'Small', 'Perfect', 'Large', 'Too large'],
    Width: ['Too narrow', 'Narrow', 'Perfect', 'Wide', 'Too wide']
  }

  return (
    <>
    {Object.keys(istics).map(istic => (
      <>
      <h2>{istic}</h2>
      <select name={istic}>
        {attributes[istic].map(attr => (
          <option value={attr}>{attr}</option>
        ))}
      </select>
      </>
    ))}
    </>
  )
}