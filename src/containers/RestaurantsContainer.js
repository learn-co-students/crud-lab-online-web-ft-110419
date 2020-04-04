import React, { Component } from "react";
import RestaurantInput from "../components/restaurants/RestaurantInput";
import Restaurants from "../components/restaurants/Restaurants";
import { connect } from "react-redux";

class RestaurantsContainer extends Component {
  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants
          restaurants={this.props.restaurants}
          deleteRestaurant={this.props.deleteRestaurant}
        />
      </div>
    );
  }
}

const mapState = ({ restaurants }) => ({ restaurants });

const mapDispatch = (dispatch) => ({
  addRestaurant: (text) => dispatch({ type: "ADD_RESTAURANT", text }),

  deleteRestaurant: (id) => dispatch({ type: "DELETE_RESTAURANT", id }),
});

export default connect(mapState, mapDispatch)(RestaurantsContainer);
