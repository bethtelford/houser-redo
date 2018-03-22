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
    this.getHouses = this.getHouses.bind(this);
    this.deleteHouse = this.deleteHouse.bind(this);
  }
  componentDidMount() {
    this.getHouses();
  }
  getHouses() {
    axios.get('/api/houses')
      .then(res => {
        console.log('GET axios res', res.data);
        this.setState({
          houses: res.data
        })
      })
  }
  deleteHouse(id) {
    axios.delete(`/api/house/${id}`)
      .then(res => this.getHouses());
  }
  render() {
    return (
      <div className='Dash'>
        <div className='dash_subheader'>
          <h2 className='dash_heading'>Dashboard</h2>
          <button className='dash_subheader_button' onClick={_ => this.props.history.push('/wizard/step1')}>Add New Property</button>
        </div>
        <div className='dash_prop_container'>
          <h3 className='dash_prop_heading'>Home Listings</h3>
          {this.state.houses.map(el => {
            return <House house={el} deleteHouse={this.deleteHouse} key={el.id} />
          })}
        </div>
      </div>
    );
  }
}

export default Dash;