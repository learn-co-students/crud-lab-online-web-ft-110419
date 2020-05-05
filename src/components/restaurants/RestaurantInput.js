import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ""
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)} >
          <input onChange={(event) => this.handleChange(event)} type="text" value={this.state.text} name="text" id="text" />
          <button type="submit">Add Restaurant</button>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
