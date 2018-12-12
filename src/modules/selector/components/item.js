import React, { Component } from 'react'

import { Button, Input } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';

class Item extends Component {
  constructor(props) {
    super(props);

    this.state =  {
      text: props.text
    };

    this.updateInputValue = this.updateInputValue.bind(this);
  }

  updateInputValue(evt) {
    this.setState({
      text: evt.target.value
    });
  }

  render() {
    const { onClick, onBlur, isActive, isInput } = this.props;
    const { text } = this.state;
    return (
      <Button color={isActive ? 'warning' : 'link'} onClick={onClick} active={isActive}>
        { isInput ? <Input onChange={this.updateInputValue} value={text} onBlur={onBlur} /> : text}
      </Button>
    );
  }
}

export default Item;