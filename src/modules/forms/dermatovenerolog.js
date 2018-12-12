import React, { Component } from 'react'

import { ListGroup, ListGroupItem, Label, FormGroup, Input, Form, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';

class Dermatovenerolog extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main>
        <Form>
          hghfghffdfgd
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0 inline">
            <Label for="exampleEmail" className="mr-sm-2">Email</Label>
            <Input type="text" name="email" id="exampleEmail" placeholder="something@idk.cool" />
          </FormGroup>
          <ListGroup>
            <ListGroupItem active tag="button" action>Cras justo odio</ListGroupItem>
            <ListGroupItem tag="button" action>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem tag="button" action>Morbi leo risus</ListGroupItem>
            <ListGroupItem tag="button" action>Porta ac consectetur ac</ListGroupItem>
            <ListGroupItem disabled tag="button" action>Vestibulum at eros</ListGroupItem>
          </ListGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0 inline">
            <Label for="examplePassword" className="mr-sm-2">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </main>
    );
  }
}

export default Dermatovenerolog;