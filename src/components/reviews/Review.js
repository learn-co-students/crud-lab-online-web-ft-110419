import React, { Component } from "react";

class Review extends Component {
  state = {
    text: this.props.review.text
  };

  handleUpdate = e => {
    console.log(e.target.outerHTML);
  };

  render() {
    return (
      <li>
        <span> {this.props.review.text} </span>
        <button onClick={() => this.props.deleteReview(this.props.review.id)}>
          X
        </button>
        <button onClick={this.handleUpdate}>update</button>
      </li>
    );
  }
}

export default Review;
