import React, { Component } from 'react';
import Restaurant from './Restaurant'

import { connect } from 'react-redux'


class Restaurants extends Component {
  render() {
    console.log(this.props)

    return(
      <ul>
        {this.props.restaurants.map(restaurant => <div key={restaurant.id}>< Restaurant restaurant={restaurant} delete={this.props.deleteRestaurant}/></div>)}
      </ul>
    );
  }
};

const mapStateToProps = (state) => { 
  return {state} 
}

const mapDispatchToProps = dispatch => ({
  deleteRestaurant: id => dispatch({ type: "DELETE_RESTAURANT", id })
})

export default connect (mapStateToProps, mapDispatchToProps)(Restaurants);