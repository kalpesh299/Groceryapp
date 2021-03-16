import React, { Component } from 'react';
import Groc from "./Groc";
import {Consumer} from '../context'

export default class Grocery extends Component {
  render() {
    return (
       
<Consumer>{value => {
  const {grocery} = value
  return grocery.map(t=> <Groc groc={t} key={t.id}></Groc>)
}}</Consumer>


      
    );
  }
}
