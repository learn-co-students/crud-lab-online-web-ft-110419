import React, { Component } from 'react';
import Restaurant from './Restaurant'


class Restaurants extends Component {
  render() {
    console.log(this.props)

    return(
      <ul>
        {this.props.restaurants.map(restaurant => < Restaurant restaurant={restaurant} delete={this.props.delete}/>)}
        Restaurants Component
      </ul>
    );
  }
};

export default Restaurants;