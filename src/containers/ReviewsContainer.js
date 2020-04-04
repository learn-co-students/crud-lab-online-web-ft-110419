import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {restaurant, addReview, deleteReview} = this.props
    return (
      <div>
        <ReviewInput addReview={addReview} restaurantId={restaurant.id} />
        <Reviews restaurant={restaurant} deleteReview={deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = ({reviews}) => ({reviews})

const mapDispatchToProps = dispatch => ({
  addReview: (text, restaurantId, e) => {
    e.preventDefault()
    dispatch({type: "ADD_REVIEW", text, restaurantId})
  },
  deleteReview: review => dispatch({type: "DELETE_REVIEW", review})
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
