import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

import { connect } from 'react-redux'


class ReviewsContainer extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <ReviewInput restaurant={this.props.restaurant} addReview={this.props.addReview}/>
        <Reviews reviews={this.props.state.reviews}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => { 
  return {state} 
}

const mapDispatchToProps = dispatch => ({
  addReview: (payload) => dispatch({ type: "ADD_REVIEW", payload })
})

export default connect (mapStateToProps, mapDispatchToProps)(ReviewsContainer)
