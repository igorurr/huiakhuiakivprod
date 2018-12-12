import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Button, Input } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';

class AnotherItem extends Component {
  constructor(props) {
    super(props);

    this.state =  {
      text: props.text,
      editable: false
    };

    this.updateInputValue   = this.updateInputValue.bind(this);
    this.onButtonClick      = this.onButtonClick.bind(this);
    this.onInputBlur        = this.onInputBlur.bind(this);
    this.onRemoveClick      = this.onRemoveClick.bind(this);
    this.toggleEditing      = this.toggleEditing.bind(this);
  }

  updateInputValue(evt) {
    this.setState({
      text: evt.target.value
    });
  }

  onButtonClick() {
    this.props.onClick();
    this.toggleEditing( true );
  }

  onInputBlur() {
    this.toggleEditing( false );
  }

  onRemoveClick(evt) {
    console.log(evt);
    evt.stopPropagation();
    this.props.onRemove();
  }

  toggleEditing( newVal ) {
    this.setState({
      editable: newVal
    });
  }

  render() {
    const { isActive } = this.props;
    const { text, editable } = this.state;
    return (
      <Button
        className={'another-item'}
        color={isActive ? 'warning' : 'link'}
        onClick={this.onButtonClick}
        active={isActive}
      >
        <a onClick={this.onRemoveClick}>X</a>
        { editable ?
          <Input
            onChange={this.updateInputValue}
            value={text}
            onBlur={this.onInputBlur}
            ref={ el => this.inputDOMElement = ReactDOM.findDOMNode(el) }
          /> :
          text
        }
      </Button>
    );
  }

  componentDidUpdate() {
    if ( this.inputDOMElement === null || this.inputDOMElement === undefined )
      return;

    this.inputDOMElement.focus();
  }
}

export default AnotherItem;