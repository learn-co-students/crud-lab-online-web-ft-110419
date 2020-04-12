import React, { Component } from 'react';

class ReviewInput extends Component {

  constructor(){
    super()
    this.state = {
      text: ''
    }
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    let review = {
      text: this.state.text,
      restaurantId: this.props.restaurantId
    }
    this.props.addReview(review)
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>New Review: </label>
          <input onChange={this.handleChange} type="text" value={this.state.text}/>
          <input type="submit" value="Add Review"></input>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
