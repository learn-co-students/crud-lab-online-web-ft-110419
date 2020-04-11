import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {


  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => this.props.deletes(restaurant.id)} > X </button>
          <ReviewsContainer restaurant={restaurant}/>
          <br />
        </li>
      </div>
    );
  }
};

export default Restaurant;