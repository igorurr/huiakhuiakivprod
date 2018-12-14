import React, { Component } from 'react'

import { InputGroupAddon, InputGroup, InputGroupText, Nav, NavbarBrand, Label, FormGroup, Input, Form, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';

import { Selector, SelectorTextItem, SelectorInputItem } from '../selector'

class Nevrolog extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main>
        <Form action="/" method="get">
          <Nav className="ml-auto" navbar>
            <NavbarBrand>
              Осмотр невролога
            </NavbarBrand>
          </Nav>

          <Label>Жалобы:</Label>
          <Input type="textarea" name="zhalobi" />

          <Label>Анамнез:</Label>
          <Input type="textarea" name="anamnez" />

          <Label>NST: Со стороны:</Label>
          <Input type="textarea" name="nst" />

          <InputGroup>
            <InputGroupText>Пальпация остистыx отростков:</InputGroupText>
            <Selector
              single
              name="palpatsiuaostistikh"
            >
              <SelectorTextItem keyItem={'1'}>болезненная</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>безболезненная</SelectorTextItem>
            </Selector>
          </InputGroup>

          <InputGroup>
            <InputGroupText>Дефанс паравертебральныx мышц:</InputGroupText>
            <Selector
              single
              name="defansparavertebralnikh"
            >
              <SelectorTextItem keyItem={'1'}>определяется</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>не определяется</SelectorTextItem>
            </Selector>
          </InputGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Суx. рефлексы:</InputGroupText>
            </InputGroupAddon>
            <Input name="sukhreflex" />
          </InputGroup>

          <InputGroup>
            <InputGroupText>В позе Ромбега:</InputGroupText>
            <Selector
              single
              name="pozarombega"
            >
              <SelectorTextItem keyItem={'1'}>устойчив</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>не устойчив</SelectorTextItem>
            </Selector>
          </InputGroup>

          <Label>Диагноз:</Label>
          <Input type="textarea" name="diagnoz" />

          <Button>Submit</Button>
        </Form>
      </main>
    );
  }
}

export default Nevrolog;