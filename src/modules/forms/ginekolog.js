import React, { Component } from 'react'

import { InputGroupAddon, InputGroup, InputGroupText, ListGroup, ListGroupItem, Label, FormGroup, Input, Form, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';

import { Selector } from '../selector'

class Ginekolog extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main>
        <Form>
          <Label>Жалобы</Label>
          <Input type="textarea" name="complaints" />
          <FormGroup className="inputs-mini inline mb-2 mr-sm-2 mb-sm-0">
            <Label>Менструации с</Label>
            <Input type="text" />
            <Label>лет, по</Label>
            <Input type="text" />
            <Label>дней, через</Label>
            <Input type="text" />
            <Label>дней</Label>
          </FormGroup>

          <Selector
            single
            another
            items={['умеренные','обильные','безболезненные','регулярные','нерегулярные']}
            onReSelect={(ps,is)=>console.log(ps,is)}
          />

          <FormGroup className="inputs-mini inline mb-2 mr-sm-2 mb-sm-0">
            <Label>П/М</Label>
            <Input type="text" />
            <Label>,Р</Label>
            <Input type="text" />
            <Label>,А</Label>
            <Input type="text" />
            <Label>,В</Label>
            <Input type="text" />
          </FormGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Твс, вензаболеваания, болезнь Боткина: </InputGroupText>
            </InputGroupAddon>
            <Input />
          </InputGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Алергоанамнез: спокоен, аллергична</InputGroupText>
            </InputGroupAddon>
            <Input />
          </InputGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Перенесённые заболевания:</InputGroupText>
            </InputGroupAddon>
            <Input />
          </InputGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Операции в анамнезе:</InputGroupText>
            </InputGroupAddon>
            <Input />
          </InputGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Состоит на "Д" учёте по:</InputGroupText>
            </InputGroupAddon>
            <Input />
          </InputGroup>

          <FormGroup className="inline mb-2 mr-sm-2 mb-sm-0">
            <Label>Д/коагуляция в</Label>
            <Input type="text" />
            <Label>году</Label>
          </FormGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Гемотрансфузия</InputGroupText>
            </InputGroupAddon>
            <Input />
          </InputGroup>

          <FormGroup className="inline mb-2 mr-sm-2 mb-sm-0">
            <Label>Полипэктомия в</Label>
            <Input type="text" />
            <Label>году</Label>
          </FormGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Флюорография</InputGroupText>
            </InputGroupAddon>
            <Input />
            <InputGroupAddon addonType="append">
              <InputGroupText>Дата осмотра</InputGroupText>
              <InputGroupText>Дата осмотра</InputGroupText>
            </InputGroupAddon>
          </InputGroup>

          <Button>Submit</Button>
        </Form>
      </main>
    );
  }
}

export default Ginekolog;