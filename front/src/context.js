import React, { Component } from 'react';
import axios from "axios"
const Context = React.createContext()


/*defined our prevstate function*/
const reducer = (prevState,action)=>{
      switch(action.type){
            case "TOGGLE":
            return{grocery: prevState.grocery.map(t=>{if(t._id=== action.payload){t.complete=
                   !t.complete};return t })}
            case "REMOVE" :
            return {grocery: prevState.grocery.filter(groc => groc._id !== action.payload) } 
            
            case "ADD" :
                  return {grocery: [...prevState.grocery, action.payload]}  

              
      
            default:
            return prevState
      }
}


//we change context to provider and we dont want to keep it default
export class Provider extends Component {
      /*creating the state wich our items*/
      state = {
            grocery:[],
            dispatch:(action)=>this.setState(prevState => reducer(prevState,action))

      }
      /*axios is used for to store our ip op data fetching by didount*/
      componentDidMount(){
            axios.get('/grocery')
            .then(res=>this.setState({grocery:res.data}))
      }
  render() {
    return (
          /*value this.state is passing*/
     <Context.Provider value={this.state}>
           {this.props.children}
     </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer