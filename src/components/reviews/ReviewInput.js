import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleChange = e => {
    this.setState({text: e.target.value})
  }

  render() {
    const {addReview, restaurantId} = this.props
    return (
      <div>
        <form onSubmit={(e)=> addReview(this.state.text, restaurantId, e)}>
          <input type='text' onChange={this.handleChange} />
          <input type='submit' value='Review' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
