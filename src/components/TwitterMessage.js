import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      character: props.maxChars
    };
  }

  handleChange = e => {
    this.setState({
      message: e.target.value,
      character: this.props.maxChars - e.target.value.length
    });
  };

  render() {
    let chars = this.props.character;
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          onChange={e => this.handleChange(e)}
          value={this.state.message}
          maxLength={chars}
        />
        {this.state.character}
      </div>
    );
  }
}

export default TwitterMessage;
