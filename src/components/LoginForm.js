import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username:'',
      password:''
    };
  }

  changeUsername = e => {
    console.log(e.target.value)
    this.setState({
      username: e.target.value
    })
  }

  changePassword = (e) => {
    console.log(e.target.value)
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    
    this.props.onSubmit(this.state)
 

  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text"  onChange={this.changeUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.changePassword}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
