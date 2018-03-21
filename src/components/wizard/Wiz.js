import React, { Component } from 'react';
import axios from 'axios';

import './Wiz.css';

class Wiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.cancel = this.cancel.bind(this);
    this.complete = this.complete.bind(this);
  }
  handleChange(prop, value) {
    switch (prop) {
      case 'state':
        if (value.length > 2) {
          return
        }
      case 'zip':
        if (value.length > 5) {
          return
        }
    }
    this.setState({ [prop]: value })
  }
  cancel() {
    this.setState({
      name: '',
      address: '',
      city: '',
      state: '',
      zip: 0
    })
    this.props.history.push('/')
  }
  complete() {
    axios.post('/api/house', this.state)
      .then(res => {
        this.cancel();
      })
  }
  render() {
    return (
      <div className='Wiz'>
        <div className='wiz_subheader'>
          <h2 className='wiz_heading'>Add New Listing</h2>
          <button className='wiz_subheader_button' onClick={this.cancel}>Cancel</button>
        </div>
        <div className='wiz_input_container'>
          <div className='wiz_input_box'>
            <p>Property Name</p>
            <input value={this.state.name} onChange={e => this.handleChange('name', e.target.value)} />
          </div>
          <div className='wiz_input_box'>
            <p>Address</p>
            <input style={{ width: "35vw" }} value={this.state.address} onChange={e => this.handleChange('address', e.target.value)} />
          </div>
          <div className='wiz_input_box'>
            <p>City</p>
            <input value={this.state.city} onChange={e => this.handleChange('city', e.target.value)} />
          </div>
          <div className='wiz_input_box'>
            <p>State</p>
            <input style={{ width: "70px" }} value={this.state.state} onChange={e => this.handleChange('state', e.target.value)} />
          </div>
          <div className='wiz_input_box'>
            <p>Zip</p>
            <input style={{ width: "100px" }} type='number' value={this.state.zip} onChange={e => this.handleChange('zip', e.target.value)} />
          </div>
        </div>
        <button className='wiz_button' onClick={this.complete}>Complete</button>
      </div>
    );
  }
}

export default Wiz;