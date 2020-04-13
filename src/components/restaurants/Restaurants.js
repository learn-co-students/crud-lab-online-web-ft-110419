import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    return (
      <ul>
        {this.props.restaurants.map(r => (
          <Restaurant restaurant={r} key={r.id} deleteRestaurant={this.props.deleteRestaurant} />
        ))}
      </ul>
    );
  }
};

export default Restaurants;