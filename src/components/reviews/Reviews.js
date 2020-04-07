import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  showReview() {
    const { reviews, restaurant } = this.props;
    // debugger
    if (reviews){
      return reviews.filter(r => r.restaurantId === restaurant.id)
    } else {
      return null
    }
  }

  render() {
    // debugger
    if (this.props.reviews){
    return (
      <div>
        <ul>
          {this.showReview().map(r => 
            <Review 
            key={r.id}
            review={r}
            deleteReview={this.props.deleteReview}
            />
            )}
        </ul>
      </div>
          );
    } else {
      return null; 
    }
  }

};

export default Reviews;