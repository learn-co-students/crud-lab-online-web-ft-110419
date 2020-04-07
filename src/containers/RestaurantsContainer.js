import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import {ADD_RESTAURANT,DELETE_RESTAURANT} from "../components/actions"
import { connect } from 'react-redux';
class RestaurantsContainer extends Component {

  render() {
 
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant}/>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch =>({
  addRestaurant: payload => dispatch(ADD_RESTAURANT(payload)),
  deleteRestaurant: restaurant => dispatch(DELETE_RESTAURANT(restaurant))
})
function mapStateToProps(state){
  return {
    restaurants: state.restaurants
  }
} 
export default connect(mapStateToProps,mapDispatchToProps)(RestaurantsContainer)
