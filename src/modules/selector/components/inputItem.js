import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Input, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';
import {createSelectorItem} from "../index";

class InputItem extends Component {
  constructor(props) {
    super(props);

    this.state =  {
      text: props.value,
      editable: false
    };

    this.updateInputValue   = this.updateInputValue.bind(this);
    this.onElementClick      = this.onElementClick.bind(this);
    this.onInputBlur        = this.onInputBlur.bind(this);
    this.onRemoveClick      = this.onRemoveClick.bind(this);
    this.toggleEditing      = this.toggleEditing.bind(this);
  }

  updateInputValue(evt) {
    this.setState({
      text: evt.target.value
    });
  }

  onElementClick() {
    this.toggleEditing( true );
  }

  onInputBlur() {
    this.props.change( this.state.text );
    this.toggleEditing( false );
  }

  onRemoveClick(evt) {
    evt.stopPropagation();
    this.props.remove();
  }

  toggleEditing( newVal ) {
    this.setState({
      editable: newVal
    });
  }

  render() {
    const { textBefore, textAfter, keyItem, value, removable } = this.props;
    const { text, editable } = this.state;

    return (
      <a onClick={this.onElementClick} className={'input-item'}>
        { removable ? <a onClick={this.onRemoveClick}>X</a> : null }
        { (textBefore ? textBefore : '') + ' ' }
        {
          editable ?
            <Input
              onChange={this.updateInputValue}
              value={text}
              onBlur={this.onInputBlur}
              ref={ el => this.inputDOMElement = ReactDOM.findDOMNode(el) }
            /> :
            text
        }
        { ' ' + (textAfter ? textAfter : '') }
      </a>
    );
  }

  componentDidUpdate() {
    if ( this.inputDOMElement === null || this.inputDOMElement === undefined )
      return;

    this.inputDOMElement.focus();
  }
}

export default InputItem;