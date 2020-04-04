import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  resturantReviews() {
    const { reviews, restaurant } = this.props;
    return reviews.filter(r => r.restaurantId === restaurant.id);
  }

  render() {
    return (
      <ul>
        {this.resturantReviews().map(r => (
          <Review
            key={r.id}
            review={r}
            deleteReview={this.props.deleteReview}
            updateReview={this.props.updateReview}
          />
        ))}
      </ul>
    );
  }
}

export default Reviews;
