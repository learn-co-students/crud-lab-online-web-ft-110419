import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {




  render() {

    const { restaurant } = this.props;
    console.log("rendered")

    return (
        <li>
          {restaurant.text}
          <button onClick={() => {console.log("button was clicked"); this.props.delete(restaurant.id)}}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
    );
  }
};

export default Restaurant;
