import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import ScrollBar from './ScrollBar';
//import {robots} from './robots';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
  }
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users })
      );
  }
  render() {
    const filterRobot = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className='tc'>
        <h1 className='f1'>Robofriend Web App</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <ScrollBar >
        <CardList robots={filterRobot} />
        </ScrollBar>
      </div>
    );
  }
}

export default App;