import React from 'react';
import logo from './logo.svg';
import './App.css';
import Car from './car/car'

function App() {
  const divStyle = {
    textAlign: 'center'
  }
  return (
    <div className="App" style={divStyle}>
      <h2>hello wolld</h2>
      <Car name={'Ford'} year={2017}>
          <p>Color</p>
        </Car>
      <Car name={'Audi'} year={2011}/>
    </div>
  );
}

export default App;
