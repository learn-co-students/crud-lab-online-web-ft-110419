import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <input onChange={this.handleChange} type="text" value={this.state.text} name="text" id="text" />
          <button type="submit">Add Restaurant</button>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
