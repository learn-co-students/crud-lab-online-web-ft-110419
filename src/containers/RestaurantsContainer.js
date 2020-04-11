import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput add = {this.props.add} />
        <Restaurants restaurants = {this.props.restaurants} deletes = {this.props.deletes}/>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
	return {deletes: (id) => dispatch({type: 'DELETE_RESTAURANT', id: id}),
	add: (name) => dispatch({type: 'ADD_RESTAURANT', restaurant: {text: name, reviews: []}})}
}
export default connect(state => ({restaurants: state.restaurants}), mapDispatchToProps)(RestaurantsContainer)