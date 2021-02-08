import React from "react";


class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleOnChange = (e)=> {
    //console.log(e.target.value)
    this.setState({
      //[e.target.name]: e.target.value 
      value: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message"
          value={this.state.value}
          onChange={this.handleOnChange}
        />
        <p>remaining characters: {this.props.maxChars - this.state.value.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
