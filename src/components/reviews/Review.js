import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review } = this.props

    return (
      <div>
        <li>
          {review.text}<button onClick={() => this.props.delete(review.id)}> X </button>
        </li>
      </div>
    );
  }

};

export default Review;
