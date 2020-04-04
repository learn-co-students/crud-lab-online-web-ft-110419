import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id} />
        <Reviews reviews={this.props.reviews} restaurantId={this.props.restaurant.id} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: review => dispatch({ type: "ADD_REVIEW", review })
  }
}

export default connect(({ reviews }) => ({ reviews }), mapDispatchToProps)(ReviewsContainer);
