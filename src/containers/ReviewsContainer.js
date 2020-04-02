import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

import { connect } from 'react-redux'


class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview}/>
        <Reviews reviews={this.props.state.reviews} restaurant={this.props.restaurant}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => { 
  return {state} 
}

const mapDispatchToProps = dispatch => ({
  addReview: (review) => dispatch({ type: "ADD_REVIEW", review })

})

export default connect (mapStateToProps, mapDispatchToProps)(ReviewsContainer)
