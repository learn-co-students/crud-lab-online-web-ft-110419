import React, { Component } from 'react';
import Review from './Review';
import { connect } from 'react-redux';

class Reviews extends Component {
  
  render() {
    return (
      <ul>
        {this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId).map(review => <Review review={review} />)}
      </ul>
    );
  }
};

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

export default connect(mapStateToProps)(Reviews);