import React, { Component } from 'react';
import Restaurant from './Restaurant';
import { connect } from 'react-redux';

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map(restaurant => {
          return (
            <Restaurant key={restaurant.id} restaurant={restaurant} delete={this.props.deleteRestaurant} />
          );
        })}
      </ul>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    deleteRestaurant: id => dispatch({ type: "DELETE_RESTAURANT", id })
  }
}
export default connect(null, mapDispatchToProps)(Restaurants);
