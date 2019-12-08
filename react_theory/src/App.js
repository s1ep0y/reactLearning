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
  changeTitle = (newTitle) =>{
    
    this.setState({
      pageTitle: newTitle
    }) 
  }

  inputListen = (event) =>{
    this.setState({
      pageTitle: event.target.value
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
      
      <input type="text" onChange={this.inputListen}></input>

      <button onClick={this.changeTitle.bind(this, 'Changed 1st btn')}>Change title</button>
        {cars.map((info)=> 
        <Car name={info.name} 
        year = {info.year} 
        onChangeTitle={this.changeTitle.bind(this, info.name)}
        />)}
      </div>
    );
  }
}

export default App;
