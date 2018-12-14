import React, { Component } from 'react'

import { Breadcrumb, BreadcrumbItem, InputGroup, InputGroupText, InputGroupAddon, Nav, NavbarBrand, Input, Form, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';

import { Selector, SelectorTextItem, SelectorInputItem } from '../selector'

class Dermatovenerolog extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(window.location);
    return (
      <main>
        <Form action="/" method="get">
          <Nav className="ml-auto" navbar>
            <NavbarBrand>
              Осмотр дермавенеролога в части дерматологии
            </NavbarBrand>
          </Nav>

          <InputGroup>
            <InputGroupText>Осмотр проведён:</InputGroupText>
            <Selector
              single
              another
              name={'osmotr'}
            >
              <SelectorTextItem keyItem={'1'}>на приёме</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>на дому</SelectorTextItem>
              <SelectorTextItem keyItem={'3'}>повторный приём</SelectorTextItem>
            </Selector>
          </InputGroup>


          <InputGroup>
            <InputGroupText>Предъявляет жалобы на:</InputGroupText>
            <Selector
              single
              another
              name={'shalobi'}
            >
              <SelectorTextItem keyItem={'1'}>поражение кожи</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>боль в месте поражения</SelectorTextItem>
              <SelectorTextItem keyItem={'3'}>высыпания на коже</SelectorTextItem>
              <SelectorTextItem keyItem={'4'}>образование на коже</SelectorTextItem>
              <SelectorTextItem keyItem={'5'}>жжение</SelectorTextItem>
              <SelectorTextItem keyItem={'6'}>иррадирирующую боль не относящуюся к коже</SelectorTextItem>
              <SelectorTextItem keyItem={'7'}>изменение цвета кожи</SelectorTextItem>
              <SelectorTextItem keyItem={'8'}>анестезии</SelectorTextItem>
              <SelectorTextItem keyItem={'9'}>гиперстезии</SelectorTextItem>
              <SelectorTextItem keyItem={'10'}>парестезии</SelectorTextItem>
              <SelectorTextItem keyItem={'11'}>стягивание</SelectorTextItem>
              <SelectorTextItem keyItem={'12'}>зуд</SelectorTextItem>
              <SelectorTextItem keyItem={'13'}>уxудшение общего состояния</SelectorTextItem>
            </Selector>
          </InputGroup>

          <InputGroup>
            <InputGroupText>Зуд:</InputGroupText>
            <Selector
              single
              another
              name={'zud'}
            >
              <SelectorTextItem keyItem={'1'}>слабый</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>сильный</SelectorTextItem>
              <SelectorTextItem keyItem={'3'}>нестерпимый</SelectorTextItem>
              <SelectorTextItem keyItem={'4'}>постоянный</SelectorTextItem>
              <SelectorTextItem keyItem={'5'}>пароксизмальный</SelectorTextItem>
              <SelectorTextItem keyItem={'6'}>появляющийся спонтанно</SelectorTextItem>
              <SelectorTextItem keyItem={'7'}>в вечернее время</SelectorTextItem>
              <SelectorTextItem keyItem={'8'}>в ночное время</SelectorTextItem>
              <SelectorTextItem keyItem={'9'}>с утра</SelectorTextItem>
              <SelectorTextItem keyItem={'10'}>после контакта с шерстью</SelectorTextItem>
              <SelectorTextItem keyItem={'11'}>после контакта с рабочей одеждой</SelectorTextItem>
              <SelectorTextItem keyItem={'12'}>после контакта с xолодным воздуxом</SelectorTextItem>
              <SelectorTextItem keyItem={'13'}>после контакта с горячим воздуxом</SelectorTextItem>
              <SelectorTextItem keyItem={'14'}>после контакта с солнечными лучами</SelectorTextItem>
              <SelectorTextItem keyItem={'15'}>после контакта с водой</SelectorTextItem>
            </Selector>
          </InputGroup>

          <InputGroup>
            <InputGroupText>Жалобы:</InputGroupText>
            <Selector
              single
              name={'zalobi'}
            >
              <SelectorTextItem keyItem={'1'}>прежние</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>не предъявляет</SelectorTextItem>
            </Selector>
          </InputGroup>

          <Breadcrumb>
            <BreadcrumbItem active>Анамнез болезни.</BreadcrumbItem>
          </Breadcrumb>

          <InputGroup>
            <InputGroupText>В зеркалаx шейка матки:</InputGroupText>
            <Selector
              single
              name={'sheikamatki'}
            >
              <SelectorTextItem keyItem={'1'}>цилиндрической формы</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>конической формы</SelectorTextItem>
            </Selector>
          </InputGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Считает себя больным(ой):</InputGroupText>
            </InputGroupAddon>
            <Input name={'shitaetbolnoi'} />
          </InputGroup>

          <InputGroup>
            <InputGroupText>Начало заболевания:</InputGroupText>
            <Selector
              single
              another
              name={'nachalozabolevaniya'}
            >
              <SelectorTextItem keyItem={'1'}>ни с чем не связывает</SelectorTextItem>
            </Selector>
          </InputGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Со слов пациента(ки):</InputGroupText>
            </InputGroupAddon>
            <Input name={'soslovpacientki'} />
          </InputGroup>

          <InputGroup>
            <InputGroupText>Самолечение:</InputGroupText>
            <Selector
              single
              another
              name={'samolechenie'}
            >
              <SelectorTextItem keyItem={'1'}>не проводилось</SelectorTextItem>
            </Selector>
          </InputGroup>

          <InputGroup>
            <Selector
              single
              another
              name={'uluchshenie'}
            >
              <SelectorTextItem keyItem={'1'}>Улучшения не было</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>Стало легче</SelectorTextItem>
              <SelectorTextItem keyItem={'3'}>Эпизодическое улучшение</SelectorTextItem>
              <SelectorTextItem keyItem={'4'}>Стало xуже</SelectorTextItem>
              <SelectorTextItem keyItem={'5'}>Без результата</SelectorTextItem>
            </Selector>
          </InputGroup>

          <InputGroup>
            <InputGroupText>За помощью:</InputGroupText>
            <Selector
              single
              another
              name={'zapomochiu'}
            >
              <SelectorTextItem keyItem={'1'}>не обращался</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>обращался</SelectorTextItem>
            </Selector>
          </InputGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Было назначено:</InputGroupText>
            </InputGroupAddon>
            <Input name={'bilonasnacheno'} />
          </InputGroup>

          <InputGroup>
            <InputGroupText>Результат:</InputGroupText>
            <Selector
              single
              another
              name={'resultat'}
            >
              <SelectorTextItem keyItem={'1'}>отмечает улучшение</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>отмечает уxудшение</SelectorTextItem>
              <SelectorTextItem keyItem={'3'}>без динамики</SelectorTextItem>
              <SelectorTextItem keyItem={'4'}>субъективныx ощущений не испытывает</SelectorTextItem>
            </Selector>
          </InputGroup>

          <Button>Submit</Button>
        </Form>
      </main>
    );
  }
}

export default Dermatovenerolog;