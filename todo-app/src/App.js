import React, { Component } from 'react';
// import FirstComponent from './Components/Learning-Examples/FirstComponent'
// import SecondComponent from './Components/Learning-Examples/SecondComponent'
// import ThirdComponent from './Components/Learning-Examples/ThirdComponent'
import TodoApp from './Components/Learning-Examples/todo/TodoApp'
//import logo from './logo.svg';
import './App.css';
import './bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter/> */}
        <TodoApp />
      </div>
    );
  }

}
// class LearningComponents extends Component{
//   render(){
//   return (
//     <div className="LearningComponents">
//         My Hello World
//         <FirstComponent></FirstComponent>
//         <SecondComponent></SecondComponent>
//         <ThirdComponent></ThirdComponent>
//          </div>
//          );
//   }

//}
export default App;
