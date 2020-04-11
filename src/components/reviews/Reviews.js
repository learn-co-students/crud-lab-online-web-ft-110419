import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    debugger
    const reviews = this.props.reviews.filter(review => review.restaurantId === this.props.review.restaurantId)
    const listOfReviews = reviews.map((rev, idx) => <Review key={idx} review={rev} deleteReview={this.props.deleteReview} />)
    return (
      <ul>
        {listOfReviews}
      </ul>
    );
  }
};

export default Reviews;