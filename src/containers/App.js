import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }



  componentDidMount() {

    fetch('http://starlord.hackerearth.com/TopRamen').then(response => response.json()).then(users => this.setState({ robots: users }));

  }

  sorts = () => {
    console.log(this.state.robots)
    this.setState(this.state.robots.sort(function (a, b) {

      if (a["Top Ten"] < b["Top Ten"]) { return -1; }
      if (a["Top Ten"] > b["Top Ten"]) { return 1; }
      return 0;
    }));
  }

  sorts1 = () => {
    console.log(this.state.robots)
    this.setState(this.state.robots.sort(function (a, b) {

      if (a["Country"] < b["Country"]) { return -1; }
      if (a["Country"] > b["Country"]) { return 1; }
      return 0;
    }));
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.Brand.toLowerCase().includes(searchfield.toLowerCase());
    })

    if (!robots.length) {
      return <h1>Loading...</h1>
    } else {
      return (<div className='tc'>
        <h1 className='f1'>Top Ramen Restaraunts</h1>
        <SearchBox searchChange={this.onSearchChange} sorts={this.sorts} sorts1={this.sorts1} />

        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>);
    }
  }
}

export default App;
