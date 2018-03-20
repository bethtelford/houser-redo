import React, { Component } from 'react';
import axios from 'axios';

import House from './House';

import './Dash.css';

class Dash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: []
    }
  }
  componentDidMount() {
    axios.get('/api/houses')
      .then(resp => {
        console.log('GET axios resp', resp.data);
        this.setState({
          houses: resp.data
        })
      })
  }
  render() {
    return (
      <div className='Dash'>
        <h2>Dashboard</h2>
      {this.state.houses.map(el => {
        return <House house={el} key={el.id}/>
      })}
      </div>
    );
  }
}

export default Dash;