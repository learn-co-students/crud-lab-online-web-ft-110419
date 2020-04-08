import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import {connect} from 'react-redux'

class ReviewsContainer extends Component {
  render() {
    let reviews = (this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id))
    return (
      <div>
        <ReviewInput add={this.props.add} restaurantId={this.props.restaurant.id}/>
        <Reviews reviews={reviews} deletes={this.props.deletes}/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		add: (text, id) => dispatch({type: "ADD_REVIEW", review: {text: text, restaurantId: id}}),
    deletes: (id) => dispatch({type: "DELETE_REVIEW", id: id})
	}
}

export default connect((state) => ({reviews: state.reviews}), mapDispatchToProps)(ReviewsContainer)
