import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'

import { connect } from 'react-redux'


class RestaurantsContainer extends Component {

  render() {
    // console.log(this.props.state.restaurants)
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.state.restaurants} />

      </div>
    )
  }
}

const mapStateToProps = (state) => { 
  return {state} 
}

const mapDispatchToProps = dispatch => ({
  addRestaurant: text => dispatch({ type: "ADD_RESTAURANT", text })
})

export default connect (mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
