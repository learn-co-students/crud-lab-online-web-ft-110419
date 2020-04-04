import React, { Component } from 'react';

class Review extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {review, deleteReview } = this.props

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={()=> deleteReview(review)}> X </button>
      </div>
    );
  }

};

export default Review;
