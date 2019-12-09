import React, {Component} from 'react';
import './App.css';
import Car from './car/car'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [
                {
                    name: 'Ford',
                    year: 2011
                }, {
                    name: 'Audi',
                    year: 2016
                }, {
                    name: 'Mazda',
                    year: 2010
                }
            ],
            pageTitle: "React components",
            showCars: true
        }
    }
    changeTitle = (newTitle) => {

        this.setState({pageTitle: newTitle})
    }

    // inputListen = (event) =>{   this.setState({     pageTitle: event.target.value
    // }) }

    toggleCars = () => {
        this.setState({
            showCars: !this.state.showCars
        })
    }

    onChangeName = (name, index) =>{
      const car = this.state.cars[index]
      car.name = name
      const carsArr = [...this.state.cars]
      carsArr[index] = car
      this.setState({
        carsArr
      })
    }

    deleteCar(index){
      const cars = this.state.cars.concat()
      cars.splice(index, 1)
      this.setState({
        cars
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

                {/* <input type="text" onChange={this.inputListen}></input> */}

                <button onClick={this.toggleCars}>Toggle cars</button>

                { this.state.showCars ?
                    (cars.map(
                        (info, index) => <Car
                            key={index}
                            name={info.name}
                            year={info.year}
                            onChangeName={event=>this.onChangeName(event.target.value, index)}
                            deleteCar={this.deleteCar.bind(this, index)}
                            />
                    ))
                    :null
                }

            </div>
        );
    }
}

export default App;
