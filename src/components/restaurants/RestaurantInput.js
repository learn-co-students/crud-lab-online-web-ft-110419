import React, { Component } from 'react';

class RestaurantInput extends Component {
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
    this.props.addRestaurant(this.state.text)
    this.setState({text: ""})
  }
  render() {
    return (

      <div>
        Restaurant Input
        < form onSubmit={this.handleOnSubmit}>
          <input type="text" name="text" id="text" onChange={this.handleOnChange} value={this.state.text}/>
          <input type="submit" value="submit"/>
        </form>
        
        
      </div>
    );
  }
};

export default RestaurantInput;
