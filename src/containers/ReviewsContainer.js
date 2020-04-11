import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { addReview, deleteReview } from '../action/restaurantAction'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    debugger
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id} />
        <Reviews reviews={this.props.reviews} deleteReview={this.props.deleteReview} restaurantId={this.props.restaurant.id} />
      </div>
    )
  }
}

const mSTP = state => {
  return {
    reviews: state.reviews
  }
}

export default connect(mSTP, { addReview, deleteReview })(ReviewsContainer)
