import React, { Component } from 'react';
import Restaurant from './Restaurant'
class Restaurants extends Component {
  
  render() {
    return(
      <ul>
        Restaurants Component
        {this.props.restaurants.map((rest,i) => {
          return < Restaurant key={i} id={rest.id} restaurant={rest} deleteRestaurant={this.props.deleteRestaurant} />
        })}
      </ul>
    );
  }
};

export default Restaurants;