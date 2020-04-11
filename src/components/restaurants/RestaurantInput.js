import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
  	text: ""
  }

  handleChange = (event) => {
  	this.setState({text: event.target.value})
  }

  handleSubmit = (event) => {
  	event.preventDefault()
  	this.props.add(this.state.text)
  	this.setState({text: ""})
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        	<label htmlFor="name">New Restaurant Name:   </label>
        	<input type="text" name="name" value={this.state.text} onChange = {this.handleChange} />
        	<br />
        	<input type="submit" value="Add Restaurant"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;