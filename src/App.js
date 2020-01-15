import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const fs = require('fs')
const request = require('request')
const rp = require('request-promise')

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      ingredients: null,
      petfood: null,
      petid: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    
  }

  handleChange(event) {
    //fetch(`https://www.chewy.com/s?query=${this.state.petfood}`)
      //.then(response => response.json())
      //.then(data => this.setState({ ingredients: data }));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({petfood: this.element.value});
    fetch(`https://www.chewy.com/s?query=${this.element.value}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ingredients: data })
        return(
          <div>
            {this.state.ingredients}
          </div>
        )
      });
    
    
  }

  render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type='text' name='element' ref={el => this.element = el} />
            <input type='submit' value='Submit' />
          </form>
          <span>{this.state.petfood}</span>
          <span>{this.state.ingredients}</span>
        </div>
      );
  }
}

export default App;
