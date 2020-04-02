import React, { Component } from 'react';
import Review from './Review';

import { connect } from 'react-redux'


class Reviews extends Component {

  render() {
    // console.log(this.props)
    return (
      <ul>
        {this.props.reviews.map(review => {
          if (review.restaurantId === this.props.restaurant.id) {
           return (<div key={review.id}><Review review={review} delete={this.props.deleteReview}/></div>)
          }
        })}
      </ul>
    );
  }
};

const mapStateToProps = (state) => { 
  return {state} 
}

const mapDispatchToProps = dispatch => ({
  deleteReview: id => dispatch({ type: "DELETE_REVIEW", id })
})

export default connect (mapStateToProps, mapDispatchToProps)(Reviews);