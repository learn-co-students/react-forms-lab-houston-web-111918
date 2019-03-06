import React from "react";

class TwitterMessage extends React.Component {
  
  constructor() {
    super()
    this.state = {
      value:"happy"
    };
  }

  logValue = (e) => {
    console.log("This is the value in the text field", e.target.value)
    this.setState({value: e.target.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
        type="text"
        value={this.state.value}
        onChange={(e) => this.logValue(e)}
         />
         <p>Characters remaining: {this.props.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
