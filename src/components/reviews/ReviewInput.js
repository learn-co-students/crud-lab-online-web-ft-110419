import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ""
  }

  handleOnChange = e => (this.setState({ text: e.target.value }));

  handleOnSubmit = e => {
    e.preventDefault();

    this.props.addReview({ text: this.state.text, restaurantId: this.props.restaurantId });

    this.setState({ text: '' });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" placeholder="review" value={this.state.text} onChange={this.handleOnChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
