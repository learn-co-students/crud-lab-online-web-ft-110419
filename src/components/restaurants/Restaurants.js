import React, { Component } from 'react';
import Restaurant from './Restaurant.js'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map (restaurant =>
          <Restaurant key={restaurant.id} restaurant={restaurant} deletes={this.props.deletes}/>)}
      </ul>
    );
  }
};

export default Restaurants;
