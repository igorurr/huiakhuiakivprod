import React, { Component } from 'react'

import { InputGroupAddon, InputGroup, InputGroupText, Nav, NavbarBrand, Label, FormGroup, Input, Form, Button } from 'reactstrap'
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
          <Nav className="ml-auto" navbar>
            <NavbarBrand>
              Осмотр гинеколога
            </NavbarBrand>
          </Nav>

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
            items={['умеренные','обильные','безболезненные','регулярные','нерегулярные']}
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

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Результат гистологии:</InputGroupText>
            </InputGroupAddon>
            <Input />
          </InputGroup>

          <InputGroup>
            <InputGroupText>Молочные железы:</InputGroupText>
            <Selector
              single
              items={['мягкие','диффузно-нагрубевшие']}
            />
            <Button color={'danger'}/>
          </InputGroup>

          <InputGroup>
            <InputGroupText>Образование:</InputGroupText>
            <Selector
              single
              items={['плотное']}
            />
            <Button color={'danger'}/>
          </InputGroup>

          <InputGroup>
            <Selector
              single
              items={['спаяно с кожей','не спаяно с кожей','подвижное','болезненное','б/болезненное']}
            />
          </InputGroup>

          <InputGroup>
            <InputGroupText>Соски:</InputGroupText>
            <Selector
              single
              items={['втянуты','не втянуты','чистые','отделяемого нет','отделяемое молочного','красного','тёмного','зелёного','с примесью крови']}
            />
          </InputGroup>

          <InputGroup>
            <InputGroupText>Пол:</InputGroupText>
            <Selector
              single
              items={['мужской','женский']}
            />
          </InputGroup>

          <InputGroup>
            <Button color={'danger'}/>
          </InputGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Слизистая вульвы:</InputGroupText>
            </InputGroupAddon>
            <Input />
          </InputGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Кожа вокруг ануса:</InputGroupText>
            </InputGroupAddon>
            <Input />
          </InputGroup>

          <InputGroup>
            <InputGroupText>Влагалище:</InputGroupText>
            <Selector
              single
              items={['нерожавшей','рожавшей','слизистая розовая']}
            />
          </InputGroup>

          <InputGroup>
            <InputGroupText>В зеркалаx шейка матки:</InputGroupText>
            <Selector
              single
              items={['цилиндрической формы','конической формы']}
            />
          </InputGroup>

          <InputGroup>
            <Selector
              single
              items={['деформирована за счёт ov nabothy','н.родовыx разрывов','удлиннена','гипертрофированная','с участками эндометриоза']}
            />
          </InputGroup>

          <InputGroup>
            <Button color={'danger'}/>
          </InputGroup>

          <InputGroup>
            <Selector
              single
              items={['Позади шейки определяется болезненная бугристость','ректо-вагинальная перегородка б.особенностей','тяжистая']}
            />
          </InputGroup>

          <Button>Submit</Button>
        </Form>
      </main>
    );
  }
}

export default Ginekolog;