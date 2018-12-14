import React, { Component } from 'react'

import { InputGroupAddon, InputGroup, InputGroupText, Nav, NavbarBrand, Label, FormGroup, Input, Form, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';

import { Selector, SelectorTextItem, SelectorInputItem } from '../selector'

class Psiholog extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main>
        <Form action="/" method="get">
          <Nav className="ml-auto" navbar>
            <NavbarBrand>
              Осмотр псиxолога
            </NavbarBrand>
          </Nav>

          <InputGroup>
            <Selector
              single
              name="type"
            >
              <SelectorTextItem keyItem={'1'}>Первичный</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>Повторный</SelectorTextItem>
            </Selector>
          </InputGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Дата осмотра:</InputGroupText>
            </InputGroupAddon>
            <Input type={'datetime'} name="dateosmotr" />
          </InputGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Умственная работоспособность и продуктивность:</InputGroupText>
            </InputGroupAddon>
            <Input name="umsposiprod" />
          </InputGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Аффективная сфера:</InputGroupText>
            </InputGroupAddon>
            <Input name="affectsphere" />
          </InputGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Волевая сфера:</InputGroupText>
            </InputGroupAddon>
            <Input name="volevayasphere" />
          </InputGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Личность и межличностные отношения:</InputGroupText>
            </InputGroupAddon>
            <Input name="lichnost" />
          </InputGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Социально-псиxологическая адаптация:</InputGroupText>
            </InputGroupAddon>
            <Input name="adaptatciya" />
          </InputGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Поведение в эксперименте:</InputGroupText>
            </InputGroupAddon>
            <Input name="povedeniyevexperimente" />
          </InputGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Установка на лечение:</InputGroupText>
            </InputGroupAddon>
            <Input name="lecheniye" />
          </InputGroup>

          <Label>Заключение:</Label>
          <Input type="textarea" name="zaklucheniye" />

          <Button>Submit</Button>
        </Form>
      </main>
    );
  }
}

export default Psiholog;