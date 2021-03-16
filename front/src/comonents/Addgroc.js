
import React, { Component } from 'react';
import {Consumer} from '../context'


export default class Addgroc extends Component {
  state={
    id:4,
    title:"",
    complete:false

  }
  update=(e) => {
    this.setState({
      title:e.target.value
    })
  }

  add=(dispatch,e) => {
    e.preventDefault()
    const newGroc = this.state
    dispatch({type:'ADD',payload:newGroc})
    this.setState({ title: "" })
  }
render() {
    return (
      <Consumer>{value=>{
        const { dispatch } = value
        return <form  className="container-fluid w-50 p-3" onSubmit={this.add.bind(this, dispatch)} >
          {/*here we type our product */}
          <input type="text" className="form-control rounded-0 " placeholder="add shopping item" 
                  onChange={this.update} value={this.state.title}/> 
                  {/*after pressing this button our product will add*/}
          <button className="form-control rounded-0 btn-secondary " type="submit">Add Item</button>
    </form>
    }}</Consumer>
   
    );
  }
}
