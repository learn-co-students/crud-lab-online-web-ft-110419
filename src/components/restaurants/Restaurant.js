import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {




  render() {
    console.log(this.props)

    // const { restaurant } = this.props;

    return (
      <div>
        <li key={this.props.restaurant.id}>
          {this.props.restaurant.text}
          <ReviewsContainer restaurant={this.props.restaurant}/>
          <button onClick={() => this.props.delete(this.props.restaurant.id)}> X </button>

        </li>
      </div>
    );
  }
};

export default Restaurant;
