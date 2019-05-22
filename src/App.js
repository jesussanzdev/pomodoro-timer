import React, { Component } from 'react';
import Timer from './Timer/components/Timer';
import './App.scss';
import Header from './TimerHeader/components/TimerHeader';

class App extends Component {
  render(){
    return (
      <div className="panel panel-default app-content d-block mx-auto">
        <div className="panel-body">
          <Header />
          <Timer />
        </div>
      </div>
    );
  }
}

export default App;
