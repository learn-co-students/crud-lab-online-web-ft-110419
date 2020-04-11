import React, { Component } from 'react';

class ReviewInput extends Component {

  state = {
    text: ''
  }

handleOnSubmit(event){
  event.preventDefault()
  this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
  this.setState({
    text: ''
  })
}

handleOnChange(event){
  this.setState({
    text: event.target.value
  })
}


  render() {
    return (
      <div>
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <label>
          Review:
          <input type="text" onChange={event => this.handleOnChange(event)} value={this.state.text} />
          </label>
          <input type="Submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
