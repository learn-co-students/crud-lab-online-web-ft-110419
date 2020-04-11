import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { addRestaurant, deleteRestaurant } from '../action/restaurantAction'
import { connect } from 'react-redux'
class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant} />
      </div>
    )
  }
}

const mapStateToProps = state => ({ restaurants: state.restaurants })

// const mDSP = dispatch => ({
  
//     addRestaurant: text => dispatch({type: "ADD_RESTAURANT", text}),
//     deleteRestaurant: id => dispatch({type: "DELETE_RESTAURANT", id})
// })

export default connect(mapStateToProps, {addRestaurant, deleteRestaurant})(RestaurantsContainer)