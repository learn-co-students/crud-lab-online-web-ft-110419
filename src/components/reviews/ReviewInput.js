import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
constructor(){
  super()
  this.state ={
    text: ""
  }
}
  handleOnChange = event => {
    this.setState({ [event.target["name"]]: event.target.value})

  }
  handleOnSubmit = e =>{
    e.preventDefault()
    this.props.addReview({
      restaurantId: this.props.restaurantId,
      text: this.state.text,
    });
    this.setState({text: ""})
  }
  render() {
    return (
      <div>
        Review Input
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" name="text" onChange={this.handleOnChange} />
          <input type="submit" />
        </form>
  
      </div>
    );
  }
};

export default ReviewInput;
