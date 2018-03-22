import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { updateMoney, clear } from './../../ducks/reducer';
import './Wiz.css';

class Step3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mortgage: 0,
      recommended: 0,
      desired: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.complete = this.complete.bind(this);
  }
  handleChange(prop, value) {
    switch (prop) {
      case 'mortgage':
      console.log(value)
        this.setState({
          mortgage: value, recommended: value * 1.25
        })
        break;
      case 'desired':
        this.setState({
          desired: value
        })
        break;
      default:
        break;
    }
  }

  complete() {
    let { name, address, city, state, zip, img } = this.props;
    let house = {
      name, address, city, state, zip, img, ...this.state
    }
    axios.post('/api/house', house)
      .then(res => {
        this.props.clear();
        this.props.history.push('/')
      })
  }
  render() {
    return (
      <div>
        <div className='wiz_input_container'>
          <div style={{ textAlign: 'center', fontWeight: '700', margin: '20px' }}>Recommened Rent: ${this.state.recommended}</div>
          <div className='wiz_input_box'>
            <p>Monthly Mortgage Amount</p>
            <input type='number' style={{ width: "35vw" }} value={this.state.mortgage} onChange={e => this.handleChange('mortgage', e.target.value)} />
          </div>
          <div className='wiz_input_box'>
            <p>Desired Monthly Rent</p>
            <input type='number' style={{ width: "35vw" }} value={this.state.desired} onChange={e => this.handleChange('desired', e.target.value)} />
          </div>
        </div>
        <button className='wiz_button wiz_prev_button' onClick={_ => {
          this.props.updateMoney(this.state);
          this.props.history.push('/wizard/step2');
        }}>Previous Step</button>
        <button className='wiz_button wiz_complete_button' onClick={this.complete}>Complete</button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { updateMoney, clear })(Step3);