import React, { Component } from 'react';

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
        <form onSubmit={e => this.handleSubmit(e)}>
          <input onChange={e => this.handleChange(e)} value={this.state.text} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
