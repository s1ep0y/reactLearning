import React, { Component } from 'react';
import './App.css';
import Car from './car/car'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cars: [
        {name: 'Ford', year: 2018},
        {name: 'Audi', year: 2016},
        {name: 'Mazda', year: 2010}
      ]
    }
  }

  
  render() {
    const divStyle = {
      textAlign: 'center'
    }

    const cars = this.state.cars  

    return (
      <div style={divStyle}>
        <h1>Cars</h1>
        {this.state.cars.map((props)=> {
        return <Car name={props.name} year = {props.year} />})}
      </div>
    );
  }
}

export default App;
