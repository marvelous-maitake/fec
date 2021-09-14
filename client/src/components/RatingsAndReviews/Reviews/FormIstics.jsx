import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

export default function IsticsForm({istics}) {

  const attributes = {
    Fit: ['Too small', 'Perfect', 'Too large'],
    Length: ['Too short', 'Perfect', 'Too long'],
    Comfort: ['Poor', 'Okay', 'Perfect'],
    Quality: ['Poor', 'Okay', 'Perfect'],
    Size: ['Too small', 'Perfect', 'Too large'],
    Width: ['Too narrow', 'Perfect', 'Too wide']
  }

  return (
    <>
    {Object.keys(istics).map(istic => (
      <div key={istics[istic].id} >
        <legend>{istic}</legend>
        <input type="radio" name="istic" id="5"></input>
        <label htmlFor="5">{attributes[istic][0]}</label>
        <input type="radio" name="istic" id="4"></input>
        <input type="radio" name="istic" id="3"></input>
        <label htmlFor="3">{attributes[istic][1]}</label>
        <input type="radio" name="istic" id="2"></input>
        <input type="radio" name="istic" id="1"></input>
        <label htmlFor="1">{attributes[istic][2]}</label>
      </div>
    ))}
    </>
  )
}