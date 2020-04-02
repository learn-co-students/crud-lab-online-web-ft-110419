import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state= {
    text: ''
  }

  handleChange = (event) => {
    console.log(this.props.restaurant)
    this.setState({ text: event.target.value})
  }

  handleSubmit = (event) => {
    console.log(this.props)
    console.log(this.state)
    event.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurant.id})
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="text" value={this.state.text} onChange={this.handleChange}></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
