import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id} />
        <Reviews
          restaurant={this.props.restaurant}
          reviews={this.props.reviews}
          deleteReview={this.props.deleteReview}
          updateReview={this.props.updateReview}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ reviews }) => ({ reviews });

const mapDispatchToProps = (dispatch) => {
  return {
    addReview: (review) => dispatch({ type: "ADD_REVIEW", review }),
    deleteReview: (id) => dispatch({ type: "DELETE_REVIEW", id }),
    updateReview: (review) => dispatch({ type: "UPDATE_REVIEW", review }),
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(ReviewsContainer)
