import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleChange = (event) => {
    this.setState( {text: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // console.log(event.target)
    // console.log(this.state)
    this.props.addRestaurant(this.state.text)
    this.setState({text: ''})
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        Restaurant Input
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="text" onChange={this.handleChange} value={this.state.text}></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
