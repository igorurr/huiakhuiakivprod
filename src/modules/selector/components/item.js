import React, { Component } from 'react'

import { Button, Input } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';

class Item extends Component {
  constructor(props) {
    super(props);

    this.state =  {
      text: typeof props.children === 'string' ? props.children : ''
    };

    this.updateInputValue = this.updateInputValue.bind(this);
  }

  updateInputValue(evt) {
    this.setState({
      text: evt.target.value
    });
  }

  render() {
    const { onClick, onBlur, isActive, children } = this.props;
    const { text } = this.state;
    return (
      <Button className={'item'} color={isActive ? 'warning' : 'link'} onClick={onClick} active={isActive}>
        { children }
      </Button>
    );
  }
}

export default Item;