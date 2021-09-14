import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

export default function IsticsForm({istics}) {
  <>
  {Object.keys(istics).map(istic => (
    <div key={istics[istic].id} >
      <input type="radio" name="istic" id="5"></input>
      <label htmlFor="5">{attributes[istic][2]}</label>
      <input type="radio" name="istic" id="4"></input>
      <input type="radio" name="istic" id="3"></input>
      <label htmlFor="3">{attributes[istic][1]}</label>
      <input type="radio" name="istic" id="2"></input>
      <input type="radio" name="istic" id="1"></input>
      <label htmlFor="1">{attributes[istic][0]}</label>
    </div>
  ))}
  </>
}