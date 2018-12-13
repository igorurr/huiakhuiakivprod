import React, { Component } from 'react'

class SelectorItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return this.props.children;
  }
}

export default SelectorItem;