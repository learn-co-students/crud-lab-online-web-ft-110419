import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {




  render() {

    const { restaurant } = this.props;
    console.log(this.props)

    return (
        <li>
          {restaurant.text}<button onClick={() => this.props.delete(restaurant.id)}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
    );
  }
};

export default Restaurant;
