import React, {Component} from 'react';
import 'milligram';
import './App.css';
import Form from './components/Form';

class App extends Component {
  state= {
    isShowing: true
  }
  render(){
    return (
      <div className="App container">
        {this.state.isShowing? <Form /> : null}
      </div>
    );
  }
}

export default App;
