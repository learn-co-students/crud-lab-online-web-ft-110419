import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id} />
        <Reviews restaurantId={this.props.restaurant.id} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: (reviewText, restaurantId) => {dispatch({type: 'ADD_REVIEW', text: reviewText, restaurantId: restaurantId})}
  }
}

export default connect(null, mapDispatchToProps)(ReviewsContainer)
