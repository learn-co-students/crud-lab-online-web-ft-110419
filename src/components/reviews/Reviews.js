import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const reviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId);
    return (
      <ul>
        {reviews.map((review, index) => <Review key={index} review={review} deleteReview={this.props.deleteReview}/>)}
      </ul>
    );
  }
};

export default Reviews;