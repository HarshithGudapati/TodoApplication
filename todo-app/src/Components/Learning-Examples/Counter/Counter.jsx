import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Counter.css'

class counter extends Component{
  constructor(){
    super();
    this.state={
        counter : 0,
        
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
}
  render(){
    return (
      <div className="counter">
        <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <CounterButton by ={5} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
        <CounterButton by ={10} incrementMethod={this.increment}decrementMethod={this.decrement}></CounterButton>
        <span className="count">{this.state.counter}</span>
        <div><button className="reset" onClick={this.reset}>Reset</button></div>
         </div>
    );
    }

    reset(){

      this.setState(
        (prevState)=>{
        return {counter:0}

      });

    }
    increment(by){
      //console.log(`increment from child -${by}`);
      this.setState(
        (prevState)=>{
        return {counter: prevState.counter+by}

      });
      
  }
  decrement(by){
    //console.log(`increment from child -${by}`);
    this.setState(
      (prevState)=>{
      return {counter: prevState.counter-by}

    });
    
}
}

 class CounterButton extends Component{
    constructor(){
        super();
    //     this.state={
    //         counter : 0,
            
    //     }
    //     this.increment = this.increment.bind(this);
    //     this.decrement = this.decrement.bind(this);
     }
    render(){
      return(
        <div className="counter">
          <button onClick={()=>this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
          <button onClick={()=>this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
      
      
        </div>
      );
    }
  //   increment(){
  //       //console.log('increment');
  //       this.setState(
  //         (prevState)=>{
  //         return {counter: prevState.counter+(this.props.by)}
          
  //       });
  //       this.props.incrementMethod(this.props.by);
  //   }
  //   decrement(){
  //     //console.log('increment');
  //     this.setState(
  //       (prevState)=>{
  //       return {counter: prevState.counter-(this.props.by)}
        
  //     });
  //     this.props.decrementMethod(this.props.by);
  // }
    
  }
  CounterButton.defaultProps ={
    by :1
  }
  CounterButton.defaultProps ={
    by : PropTypes.number
  }

  export default counter;

