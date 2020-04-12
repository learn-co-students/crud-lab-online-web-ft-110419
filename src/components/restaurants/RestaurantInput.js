import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor(){
    super()
    this.state = {
      text: ''
    };
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Restaurant Name: </label>
          <input onChange={this.handleChange} type="text" value={this.state.text} />
          <input type="submit" value="Add Restaurant" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
