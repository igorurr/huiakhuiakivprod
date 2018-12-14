import React, { Component } from 'react'

import { Button, Input } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';

class NewAnotherItem extends Component {
  constructor(props) {
    super(props);

    this.state =  {
      text: props.text
    };

    this.updateText       = this.updateText.bind(this);
    this.onInputBlur      = this.onInputBlur.bind(this);
  }

  updateText(evt) {
    this.setState({
      text: evt.target.value
    });
  }

  onInputBlur(evt) {
    this.props.onBlur(evt);

    this.setState({
      text: ''
    });
  }

  render() {
    const { isActive } = this.props;
    const { text } = this.state;
    return (
      <Button className={'new-another-item'} color={isActive ? 'warning' : 'link'} onClick={()=>{}} active={isActive}>
        <Input onChange={this.updateText} value={text} onBlur={this.onInputBlur} />
      </Button>
    );
  }
}

export default NewAnotherItem;