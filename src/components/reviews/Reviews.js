import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  constructor(props) {
    super(props)
  }

  renderReviews() {
    const {restaurant, deleteReview} = this.props
    return restaurant.reviews.map(review => <Review review={review} deleteReview={deleteReview}/>)
  }
  
  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;