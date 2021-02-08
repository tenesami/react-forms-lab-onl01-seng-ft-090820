import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (e) => {
    //console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
    
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {username, password} = this.state;

    if(username && password){
      this.props.handleLogin(username, password)
    }
    else {
      this.setState({
       username: '',
      password: ''
      })
    }
    
    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input 
              id="username" 
              name="username" 
              type="text" 
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" 
              name="password" 
              type="password" 
              value={this.state.password}
              onChange={this.handleChange}
              />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
