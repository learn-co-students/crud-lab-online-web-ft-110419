import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    console.log(this.props)
    return (
      <ul>
        {this.props.reviews.map(review => <div key={review.id}><Review review={review}/></div>)}
        Reviews
      </ul>
    );
  }
};

export default Reviews;