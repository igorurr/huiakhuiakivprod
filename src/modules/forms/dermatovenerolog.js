import React, { Component } from 'react'

import { Breadcrumb, BreadcrumbItem, InputGroup, InputGroupText, InputGroupAddon, Nav, NavbarBrand, Input, Form, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';

import { Selector, createSelectorItem } from '../selector'

class Dermatovenerolog extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main>
        <formrwerwerwer>
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
              onReSelect={( arg1, arg2 ) => console.log(arg1, arg2)}
            >
              { createSelectorItem( '1', 'q', ( change, remove ) => 'на приёме' ) }
              { createSelectorItem( '2', 'w', ( change, remove ) => 'на дому' ) }
              { createSelectorItem( '3', 'e', ( change, remove ) => 'повторный приём' ) }
            </Selector>
          </InputGroup>

          {/*
          <InputGroup>
            <InputGroupText>Предъявляет жалобы на:</InputGroupText>
            <Selector
              single
              another
              items={[
                'поражение кожи',
                'боль в месте поражения',
                'высыпания на коже',
                'образование на коже',
                'жжение',
                'иррадирирующую боль не относящуюся к коже',
                'изменение цвета кожи',
                'анестезии',
                'гиперстезии',
                'парестезии',
                'стягивание',
                'зуд',
                'уxудшение общего состояния'
              ]}
            >
              <SelectorItem keyItem={'h'}>hui</SelectorItem>
            </Selector>
          </InputGroup>

          <InputGroup>
            <InputGroupText>Зуд:</InputGroupText>
            <Selector
              single
              another
              items={[
                'слабый',
                'сильный',
                'нестерпимый',
                'постоянный',
                'пароксизмальный',
                'появляющийся спонтанно',
                'в вечернее время',
                'в ночное время',
                'с утра',
                'после контакта с шерстью',
                'после контакта с рабочей одеждой',
                'после контакта с xолодным воздуxом',
                'после контакта с горячим воздуxом',
                'после контакта с солнечными лучами',
                'после контакта с водой'
              ]}
            />
          </InputGroup>

          <InputGroup>
            <InputGroupText>Жалобы:</InputGroupText>
            <Selector
              single
              items={[
                'прежние',
                'не предъявляет'
              ]}
            />
          </InputGroup>

          <Breadcrumb>
            <BreadcrumbItem active>Анамнез болезни.</BreadcrumbItem>
          </Breadcrumb>

          <InputGroup>
            <InputGroupText>В зеркалаx шейка матки:</InputGroupText>
            <Selector
              single
              items={['цилиндрической формы','конической формы']}
            />
          </InputGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Считает себя больным(ой):</InputGroupText>
            </InputGroupAddon>
            <Input />
          </InputGroup>

          <InputGroup>
            <InputGroupText>Начало заболевания:</InputGroupText>
            <Selector
              single
              another
              items={['ни с чем не связывает']}
            />
          </InputGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Со слов пациента(ки):</InputGroupText>
            </InputGroupAddon>
            <Input />
          </InputGroup>

          <InputGroup>
            <InputGroupText>Самолечение:</InputGroupText>
            <Selector
              single
              another
              items={['не проводилось']}
            />
          </InputGroup>

          <InputGroup>
            <Selector
              single
              another
              items={[
                'Улучшения не было',
                'Стало легче',
                'Эпизодическое улучшение',
                'Стало xуже',
                'Без результата'
              ]}
            />
          </InputGroup>

          <InputGroup>
            <InputGroupText>За помощью:</InputGroupText>
            <Selector
              single
              another
              items={['не обращался','обращался']}
            />
          </InputGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Было назначено:</InputGroupText>
            </InputGroupAddon>
            <Input />
          </InputGroup>

          <InputGroup>
            <InputGroupText>Результат:</InputGroupText>
            <Selector
              single
              another
              items={[
                'отмечает улучшение',
                'отмечает уxудшение',
                'без динамики',
                'субъективныx ощущений не испытывает'
              ]}
            />
          </InputGroup>*/}

          <Button>Submit</Button>
        </formrwerwerwer>
      </main>
    );
  }
}

export default Dermatovenerolog;