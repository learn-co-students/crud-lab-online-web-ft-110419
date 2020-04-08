import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {
  	text: ""
  }

  handleChange = (event) => {
  	this.setState({text: event.target.value})
  }

  handleSubmit = (event) => {
  	event.preventDefault()
	this.props.add(this.state.text, this.props.restaurantId)
	this.setState({text: ""})
  }

  render() {
    return (
      <div>
      	<form onSubmit={this.handleSubmit}>
      		<label>Write A Review:</label><br />
        	<input type="text" value={this.state.text} onChange={this.handleChange} />
       		<br />
        	<input type='submit' value="Post Review"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
