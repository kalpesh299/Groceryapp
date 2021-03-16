import React, { Component } from 'react';
import {Consumer} from '../context'

export default class Groc extends Component {
  
  /*this is to strike our already purchased item*/
  style = () => {
    const {complete} = this.props.groc
    return {textDecoration: complete ? "line-through" : "none"}

  }
  /*creating a function to strike our purchased item*/
  toggle = (id, dispatch) => {
    dispatch({type: "TOGGLE", payload: id})
  }
  /*creating a function to dlete our item*/
  remove = (id,dispatch) => {
    dispatch({type:"REMOVE",payload: id})
}
  
  render() {
    const {title,_id} = this.props.groc
    return (
      <Consumer>{value=>{

 const { dispatch } = value
    return<h5 className="text-dark text-center p-1 bg-light float-left border border-dark " style={this.style()}>
            
            <i className="float-right m-1"></i>{title}
            {/*iten will be strike after press this button*/}
            <button className="m-2 btn bg-success float-right" type="button" onClick={this.toggle.bind(this,
            _id, dispatch)}>Purchased</button>
            
            {/*when we click on this cross button our product will delete */}
            <button className=" btn bg-info float-right " type="button" onClick={this.remove.bind(this,_id,dispatch)}>X</button>
      </h5>

      }}</Consumer>
     
    );
  }
}
