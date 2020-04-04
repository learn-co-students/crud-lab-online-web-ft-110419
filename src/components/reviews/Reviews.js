import React, { Component } from 'react';
import Review from './Review';
import { connect } from 'react-redux';

class Reviews extends Component {
  render() {
    const reviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId);

    return (
      <ul>
        {reviews.map(review => {
          return (
            <Review key={review.id} review={review} delete={this.props.deleteReview} />
          );
        })}
      </ul>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    deleteReview: id => dispatch({ type: "DELETE_REVIEW", id })
  }
}

export default connect(null, mapDispatchToProps)(Reviews);
