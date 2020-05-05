import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {

  render() {

    return (
      <div>
        <li>
          {this.props.review.text}
        </li>
        <button onClick={this.props.deleteReview(this.props.review.id)}> X </button>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    deleteReview: (reviewId) => {dispatch({type: 'DELETE_REVIEW', reviewId: reviewId})}
  }
}

export default connect(null, mapDispatchToProps)(Review);
