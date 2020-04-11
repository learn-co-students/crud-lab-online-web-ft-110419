import React, { Component } from 'react';
// import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
  }
  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    debugger
    this.props.addReview(
      {
        text: this.state.text,
        restaurantId: this.props.restaurantId
      })
    this.setState({
      text: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={e => this.handleChange(e)} value={this.state.text} />
          <input type="submit" value="Submit" />
        </form>
        Review Input
      </div>
    );
  }
};

export default ReviewInput;
