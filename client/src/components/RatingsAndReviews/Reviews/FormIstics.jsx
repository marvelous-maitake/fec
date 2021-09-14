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
      <div key={istics[istic].id} >
        <legend>{istic}</legend>
        <input type="radio" name="istic" id="5"></input>
        <label htmlFor="5">{attributes[istic][0]}</label>
        <input type="radio" name="istic" id="4"></input>
        <label htmlFor="5">{attributes[istic][1]}</label>
        <input type="radio" name="istic" id="3"></input>
        <label htmlFor="3">{attributes[istic][2]}</label>
        <input type="radio" name="istic" id="2"></input>
        <label htmlFor="5">{attributes[istic][3]}</label>
        <input type="radio" name="istic" id="1"></input>
        <label htmlFor="1">{attributes[istic][4]}</label>
      </div>
    ))}
    </>
  )
}