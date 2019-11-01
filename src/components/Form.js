import React, { Component } from 'react'
import CitiesList from './CitiesList';

class Form extends Component {
  state = {
    name:'',
    population: '',
    area:'',
    cities:[]
  }

componentDidMount() {
  console.log('VacaMount');
}

componentDidUpdate() {
  console.log('VacaUpdate');
}

componentWillUnmount() {
  console.log('VacaUnmount')
}

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, population, area, cities } = this.state;
    const citiesCopy = [...cities];
    const newCity = {name,population, area};
    citiesCopy.push(newCity);
    this.setState({
      cities: citiesCopy,
      name:'',
      population:'',
      area:''
    })
  }
  render() {
    console.log('VacaRender');
    const { name, population, area, cities } = this.state;
    return (
        <>
        <h1>Cool form</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name'>Name</label>
          <input 
            id='name' 
            type='text' 
            name='name' 
            placeholder='Write your city name' 
            value={name}
            onChange={this.handleChange}
          />
          <label htmlFor='population'>Population</label>
          <input 
            id='population' 
            type='text' 
            name='population' 
            placeholder='120...' 
            value={population}
            onChange={this.handleChange}
          />
          <label htmlFor='area'>Area</label>
          <input 
            id='area' 
            type='text' 
            name='area' 
            placeholder='3...' 
            value={area}
            onChange={this.handleChange}
          />
          <button type='submit'>Add new city</button>
        </form>
        <CitiesList cities={cities}/>
      </>
    )
  }
}

export default Form;