import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  filterReviews = () => this.props.reviews.filter(r => r.restaurantId === this.props.restaurantId)

  render() {
    return(
      <div>
        <ul>
          {this.filterReviews().map(r => 
            <Review 
            key={r.id}
            review={r}
            deleteReview={this.props.deleteReview}
            />
            )}
        </ul>
      </div>
          );
  }

};

export default Reviews;