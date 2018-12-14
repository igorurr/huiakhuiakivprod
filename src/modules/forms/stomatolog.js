import React, { Component } from 'react'

import { InputGroupAddon, InputGroup, InputGroupText, Nav, NavbarBrand, Label, FormGroup, Input, Form, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';

import { Selector, SelectorTextItem, SelectorInputItem } from '../selector'

class Stomatolog extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main>
        <Form action="/" method="get">
          <Nav className="ml-auto" navbar>
            <NavbarBrand>
              Осмотр стоматолога
            </NavbarBrand>
          </Nav>

          <Label>Жалобы:</Label>
          <Input type="textarea" name="zhalobi" />

          <Label>Анамнез заболевания, жизни:</Label>
          <Input type="textarea" name="anamnez" />

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Объективные данные:</InputGroupText>
            </InputGroupAddon>
            <Input name="objectivdata" />
          </InputGroup>

          <InputGroup>
            <InputGroupText>Лицо:</InputGroupText>
            <Selector
              single
              name="litso"
            >
              <SelectorTextItem keyItem={'1'}>симметрично</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>ассиметрично</SelectorTextItem>
            </Selector>
          </InputGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Кожные покровы лица:</InputGroupText>
            </InputGroupAddon>
            <Input name="kozalitsa" />
          </InputGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Слизистая оболочка полости рта:</InputGroupText>
            </InputGroupAddon>
            <Input name="slizistayarta" />
          </InputGroup>

          <FormGroup className="inputs-mini inline mb-2 mr-sm-2 mb-sm-0">
            <Input name="karieszuba" type="text" />
            <Label> зуба кариозная полость по</Label>
            <Input name="klasszuba" type="text" />
            <Label>классу</Label>
          </FormGroup>

          <InputGroup>
            <InputGroupText>Кариозная полость с полостью зуба:</InputGroupText>
            <Selector
              single
              name="kariespolost"
            >
              <SelectorTextItem keyItem={'1'}>сообщается</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>не сообщается</SelectorTextItem>
            </Selector>
          </InputGroup>

          <InputGroup>
            <InputGroupText>Реакция на xолодовый раздражитель:</InputGroupText>
            <Selector
              single
              name="reactiononkholod"
            >
              <SelectorTextItem keyItem={'1'}>болезненна</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>безболезненна</SelectorTextItem>
            </Selector>
          </InputGroup>

          <InputGroup>
            <InputGroupText>Дно кариозной полости:</InputGroupText>
            <Selector
              single
              name="dnokarios"
            >
              <SelectorTextItem keyItem={'1'}>плотное</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>пигментированно</SelectorTextItem>
              <SelectorTextItem keyItem={'3'}>размягчено</SelectorTextItem>
              <SelectorInputItem keyItem={'4'} textBefore={'ЭОД(мка)'} />
            </Selector>
          </InputGroup>

          <InputGroup>
            <InputGroupText>Перкуссия зуба:</InputGroupText>
            <Selector
              single
              name="perkussiazuba"
            >
              <SelectorTextItem keyItem={'1'}>болезненна</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>безболезненна</SelectorTextItem>
              <SelectorInputItem keyItem={'3'} textBefore={'зубные отложения:'} />
            </Selector>
          </InputGroup>

          <InputGroup>
            <InputGroupText>Пальпация в проекции верxушки корня:</InputGroupText>
            <Selector
              single
              name="palpationonprojection"
            >
              <SelectorTextItem keyItem={'1'}>болезненна</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>безболезненна</SelectorTextItem>
            </Selector>
          </InputGroup>







          <Label>Жалобы</Label>
          <Input type="textarea" name="zhalobi" />
          <FormGroup className="inputs-mini inline mb-2 mr-sm-2 mb-sm-0">
            <Label>Менструации с</Label>
            <Input name="menstruaciistart" type="text" />
            <Label>лет, по</Label>
            <Input name="menstruaciiperiod" type="text" />
            <Label>дней, через</Label>
            <Input name="menstruaciicheres" type="text" />
            <Label>дней</Label>
          </FormGroup>

          <Selector
            single
            name="menstruaciitype"
          >
            <SelectorTextItem keyItem={'1'}>умеренные</SelectorTextItem>
            <SelectorTextItem keyItem={'2'}>обильные</SelectorTextItem>
            <SelectorTextItem keyItem={'3'}>безболезненные</SelectorTextItem>
            <SelectorTextItem keyItem={'4'}>регулярные</SelectorTextItem>
            <SelectorTextItem keyItem={'5'}>нерегулярные</SelectorTextItem>
          </Selector>

          <FormGroup className="inputs-mini inline mb-2 mr-sm-2 mb-sm-0">
            <Label>П/М</Label>
            <Input name="pm" type="text" />
            <Label>,Р</Label>
            <Input name="p" type="text" />
            <Label>,А</Label>
            <Input name="a" type="text" />
            <Label>,В</Label>
            <Input name="b" type="text" />
          </FormGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Твс, вензаболеваания, болезнь Боткина: </InputGroupText>
            </InputGroupAddon>
            <Input name="botkin" />
          </InputGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Алергоанамнез: спокоен, аллергична</InputGroupText>
            </InputGroupAddon>
            <Input name="alergoanamnes" />
          </InputGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Перенесённые заболевания:</InputGroupText>
            </InputGroupAddon>
            <Input name="sabolevaniya" />
          </InputGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Операции в анамнезе:</InputGroupText>
            </InputGroupAddon>
            <Input name="operationsanamnes" />
          </InputGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Состоит на "Д" учёте по:</InputGroupText>
            </InputGroupAddon>
            <Input name="duchet" />
          </InputGroup>

          <FormGroup className="inline mb-2 mr-sm-2 mb-sm-0">
            <Label>Д/коагуляция в</Label>
            <Input name="dkoagulyatsiua" type="text" />
            <Label>году</Label>
          </FormGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Гемотрансфузия</InputGroupText>
            </InputGroupAddon>
            <Input name="gemotransfusiua" />
          </InputGroup>

          <FormGroup className="inline mb-2 mr-sm-2 mb-sm-0">
            <Label>Полипэктомия в</Label>
            <Input name="polipektomiya" type="text" />
            <Label>году</Label>
          </FormGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Флюорография</InputGroupText>
            </InputGroupAddon>
            <Input name="fluorografiua" />
            <InputGroupAddon addonType="append">
              <InputGroupText>Дата осмотра</InputGroupText>
              <InputGroupText>Дата осмотра</InputGroupText>
            </InputGroupAddon>
          </InputGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Результат гистологии:</InputGroupText>
            </InputGroupAddon>
            <Input name="resultgistology" />
          </InputGroup>

          <InputGroup>
            <InputGroupText>Молочные железы:</InputGroupText>
            <Selector
              single
              name="milkshelezi"
            >
              <SelectorTextItem keyItem={'1'}>мягкие</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>диффузно-нагрубевшие</SelectorTextItem>
            </Selector>
            <Button color={'danger'}/>
          </InputGroup>

          <InputGroup>
            <InputGroupText>Образование:</InputGroupText>
            <Selector
              single
              name="obrasovaniye"
            >
              <SelectorTextItem keyItem={'1'}>плотное</SelectorTextItem>
            </Selector>
            <Button color={'danger'}/>
          </InputGroup>

          <InputGroup>
            <Selector
              single
            >
              <SelectorTextItem keyItem={'1'}>спаяно с кожей</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>не спаяно с кожей</SelectorTextItem>
              <SelectorTextItem keyItem={'3'}>подвижное</SelectorTextItem>
              <SelectorTextItem keyItem={'4'}>болезненное</SelectorTextItem>
              <SelectorTextItem keyItem={'5'}>б/болезненное</SelectorTextItem>
            </Selector>
          </InputGroup>

          <InputGroup>
            <InputGroupText>Соски:</InputGroupText>
            <Selector
              single
              name="soski"
            >
              <SelectorTextItem keyItem={'1'}>втянуты</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>не втянуты</SelectorTextItem>
              <SelectorTextItem keyItem={'3'}>чистые</SelectorTextItem>
              <SelectorTextItem keyItem={'4'}>отделяемого нет</SelectorTextItem>
              <SelectorTextItem keyItem={'5'}>отделяемое молочного</SelectorTextItem>
              <SelectorTextItem keyItem={'6'}>красного</SelectorTextItem>
              <SelectorTextItem keyItem={'7'}>тёмного</SelectorTextItem>
              <SelectorTextItem keyItem={'8'}>зелёного</SelectorTextItem>
              <SelectorTextItem keyItem={'9'}>с примесью крови</SelectorTextItem>
            </Selector>
          </InputGroup>

          <InputGroup>
            <InputGroupText>Пол:</InputGroupText>
            <Selector
              single
              name="pol"
            >
              <SelectorTextItem keyItem={'1'}>мужской</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>женский</SelectorTextItem>
            </Selector>
          </InputGroup>

          <InputGroup>
            <Button color={'danger'}/>
          </InputGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Слизистая вульвы:</InputGroupText>
            </InputGroupAddon>
            <Input name="slisistayavilvi" />
          </InputGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Кожа вокруг ануса:</InputGroupText>
            </InputGroupAddon>
            <Input name="koshavokruganusa" />
          </InputGroup>

          <InputGroup>
            <InputGroupText>Влагалище:</InputGroupText>
            <Selector
              single
              name="vlagalishe"
            >
              <SelectorTextItem keyItem={'1'}>нерожавшей</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>рожавшей</SelectorTextItem>
              <SelectorTextItem keyItem={'3'}>слизистая розовая</SelectorTextItem>
            </Selector>
          </InputGroup>

          <InputGroup>
            <InputGroupText>В зеркалаx шейка матки:</InputGroupText>
            <Selector
              single
              name="sheikamatki"
            >
              <SelectorTextItem keyItem={'1'}>цилиндрической формы</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>конической формы</SelectorTextItem>
            </Selector>
          </InputGroup>

          <InputGroup>
            <Selector
              single
              name="sheikamatki2"
            >
              <SelectorTextItem keyItem={'1'}>деформирована за счёт ov nabothy</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>н.родовыx разрывов</SelectorTextItem>
              <SelectorTextItem keyItem={'3'}>удлиннена</SelectorTextItem>
              <SelectorTextItem keyItem={'4'}>гипертрофированная</SelectorTextItem>
              <SelectorTextItem keyItem={'5'}>с участками эндометриоза</SelectorTextItem>
            </Selector>
          </InputGroup>

          <InputGroup>
            <Button color={'danger'}/>
          </InputGroup>

          <InputGroup>
            <Selector
              single
              name="sheikamatki3"
            >
              <SelectorTextItem keyItem={'1'}>Позади шейки определяется болезненная бугристость</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>ректо-вагинальная перегородка б.особенностей</SelectorTextItem>
              <SelectorTextItem keyItem={'3'}>тяжистая</SelectorTextItem>
            </Selector>
          </InputGroup>

          <Button>Submit</Button>
        </Form>
      </main>
    );
  }
}

export default Stomatolog;