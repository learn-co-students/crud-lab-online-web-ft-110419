import React, { Component } from "react";

class Review extends Component {
  state = {
    id: this.props.review.id,
    text: this.props.review.text,
    update: false,
  };

  handleDelete = () => {
    this.props.deleteReview(this.props.review.id);
  };

  handleUpdate = () => {
    this.setState((preState) => {
      return {
        update: !preState.update,
      };
    });
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateReview(this.state);
    this.handleUpdate();
  };

  renderReview = () => {
    if (this.state.update) {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.text}
          />
          <input type="submit" />
        </form>
      );
    } else {
      return (
        <span>
          {this.props.review.text}
          <button onClick={this.handleDelete}>X</button>
          {/* <input onClick={this.handleUpdate}>update</button> */}
        </span>
      );
    }
  };

  render() {
    return <li>{this.renderReview()}</li>;
  }
}

export default Review;
