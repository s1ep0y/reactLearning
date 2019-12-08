import React, { Component } from 'react';
import './App.css';
import Car from './car/car'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cars: [
        {name: 'Ford', year: 2011},
        {name: 'Audi', year: 2016},
        {name: 'Mazda', year: 2010}
      ],
      pageTitle: "React components"
    }
  }
  changeTitle = () =>{
    let oldTitle = this.state.pageTitle
    const newTitle = oldTitle + " (Changed)"
    this.setState({
      pageTitle: newTitle
    }) 
  }
  render() {
    const divStyle = {
      textAlign: 'center'
    }

    const cars = this.state.cars  

    return (
      <div style={divStyle}>
      <h1>{this.state.pageTitle}</h1>
      <button onClick={this.changeTitle}>Change title</button>
        {cars.map((info)=> <Car name={info.name} year = {info.year} />)}
      </div>
    );
  }
}

export default App;
