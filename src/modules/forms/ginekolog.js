import React, { Component } from 'react'

import { InputGroupAddon, InputGroup, InputGroupText, Nav, NavbarBrand, Label, FormGroup, Input, Form, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';

import { Selector, SelectorTextItem, SelectorInputItem } from '../selector'

class Ginekolog extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main>
        <Form action="/" method="get">
          <Nav className="ml-auto" navbar>
            <NavbarBrand>
              Осмотр гинеколога
            </NavbarBrand>
          </Nav>

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
              <Input name="dataosmotra" type="datetime-local" />
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
              <SelectorInputItem keyItem={'3'} textBefore={'уплотнены в'} textAfter={'квадранте'} />
            </Selector>
          </InputGroup>

          <InputGroup>
            <InputGroupText>Образование:</InputGroupText>
            <Selector
              single
              name="obrasovaniye"
            >
              <SelectorTextItem keyItem={'1'}>плотное</SelectorTextItem>
              <SelectorInputItem keyItem={'2'} textBefore={'размягчённое разм.'} textAfter={'квадранте'} />
              <SelectorTextItem keyItem={'3'}>спаяно с кожей</SelectorTextItem>
              <SelectorTextItem keyItem={'4'}>не спаяно с кожей</SelectorTextItem>
              <SelectorTextItem keyItem={'5'}>подвижное</SelectorTextItem>
              <SelectorTextItem keyItem={'6'}>болезненное</SelectorTextItem>
              <SelectorTextItem keyItem={'7'}>б/болезненное</SelectorTextItem>
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
            <InputGroupText>Периферические л. узлы:</InputGroupText>
            <Selector
              single
              name="periferlusli"
            >
              <SelectorTextItem keyItem={'1'}>увеличены</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>не увеличены</SelectorTextItem>
              <SelectorTextItem keyItem={'3'}>плотные</SelectorTextItem>
              <SelectorTextItem keyItem={'4'}>спаяны с кожей</SelectorTextItem>
              <SelectorTextItem keyItem={'5'}>не подвижные</SelectorTextItem>
              <SelectorTextItem keyItem={'6'}>болезненные</SelectorTextItem>
              <SelectorTextItem keyItem={'7'}>не определяются</SelectorTextItem>
              <SelectorTextItem keyItem={'8'}>определяются</SelectorTextItem>
              <SelectorTextItem keyItem={'9'}>Уретра</SelectorTextItem>
              <SelectorTextItem keyItem={'10'}>Парауретральные xоды</SelectorTextItem>
              <SelectorTextItem keyItem={'11'}>бартолиновые железы</SelectorTextItem>
              <SelectorInputItem keyItem={'12'} textBefore={'б/особенностей'} />
            </Selector>
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
              another
              name="sheikamatki2"
            >
              <SelectorTextItem keyItem={'1'}>деформирована за счёт ov nabothy</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>н.родовыx разрывов</SelectorTextItem>
              <SelectorTextItem keyItem={'3'}>удлиннена</SelectorTextItem>
              <SelectorTextItem keyItem={'4'}>гипертрофированная</SelectorTextItem>
              <SelectorTextItem keyItem={'5'}>с участками эндометриоза</SelectorTextItem>
              <SelectorInputItem keyItem={'6'} textBefore={'на'} textAfter={'часаx'} />
              <SelectorTextItem keyItem={'7'}>с участками посткоагуляционного синдрома</SelectorTextItem>
              <SelectorTextItem keyItem={'8'}>чистая</SelectorTextItem>
              <SelectorInputItem keyItem={'9'} textBefore={'эрозирована'} />
              <SelectorInputItem keyItem={'9'} textBefore={'В н.к-полип разм.'} textAfter={'см.'} />
              <SelectorTextItem keyItem={'10'}>Позади шейки определяется болезненная бугристость</SelectorTextItem>
              <SelectorTextItem keyItem={'11'}>ректо-вагинальная перегородка б.особенностей</SelectorTextItem>
              <SelectorTextItem keyItem={'12'}>тяжистая</SelectorTextItem>
            </Selector>
          </InputGroup>

          <Button>Submit</Button>
        </Form>
      </main>
    );
  }
}

export default Ginekolog;