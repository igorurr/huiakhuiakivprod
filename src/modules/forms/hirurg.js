import React, { Component } from 'react'

import { Breadcrumb, BreadcrumbItem, FormGroup, Label, InputGroup, InputGroupText, InputGroupAddon, Nav, NavbarBrand, Input, Form, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';

import { Selector, SelectorTextItem, SelectorInputItem } from '../selector'

class Hirurg extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main>
        <Form action="/" method="get">
          <Nav className="ml-auto" navbar>
            <NavbarBrand>
              Осмотр xирурга
            </NavbarBrand>
          </Nav>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Жалобы:</InputGroupText>
            </InputGroupAddon>
            <Input name={'shalobi'} />
          </InputGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>История заболевания:</InputGroupText>
            </InputGroupAddon>
            <Input name={'historybolesni'} />
          </InputGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Перенесённые операционные вмешательства:</InputGroupText>
            </InputGroupAddon>
            <Input name={'operations'} />
          </InputGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Аллергоанамнез:</InputGroupText>
            </InputGroupAddon>
            <Input name={'allergoanamnes'} />
          </InputGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Проводимые ранее лечебные мероприятия:</InputGroupText>
            </InputGroupAddon>
            <Input name={'meropriyatiya'} />
          </InputGroup>

          <FormGroup className="inputs-mini inline mb-2 mr-sm-2 mb-sm-0">
            <Label>Ps</Label>
            <Input name="ps" type="text" />
            <Label>уд./мин. АД</Label>
            <Input name="ad" type="text" />
            <Label>/</Label>
            <Input name="mmrtst" type="text" />
            <Label>мм.рт.ст. Чд</Label>
            <Input name="chd" type="text" />
            <Label>в мин. t тела</Label>
            <Input name="temperaturec" type="text" />
            <Label>°C</Label>
          </FormGroup>

          <InputGroup>
            <InputGroupText>Общее состояние:</InputGroupText>
            <Selector
              single
              name="obsheestate"
            >
              <SelectorTextItem keyItem={'1'}>удовлетворительное</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>средней тяжести</SelectorTextItem>
              <SelectorTextItem keyItem={'3'}>тяжёлое</SelectorTextItem>
            </Selector>
          </InputGroup>

          <InputGroup>
            <InputGroupText>Кожные покровы и видимые слизистые:</InputGroupText>
            <Selector
              single
              name="kozniuepokrovi"
            >
              <SelectorTextItem keyItem={'1'}>бледные</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>синюшные</SelectorTextItem>
              <SelectorTextItem keyItem={'3'}>бледно-розовые</SelectorTextItem>
              <SelectorTextItem keyItem={'4'}>акроцианоз</SelectorTextItem>
              <SelectorTextItem keyItem={'5'}>суxие</SelectorTextItem>
              <SelectorTextItem keyItem={'6'}>влажные</SelectorTextItem>
            </Selector>
          </InputGroup>

          <InputGroup>
            <InputGroupText>Язык:</InputGroupText>
            <Selector
              single
              name="yazik"
            >
              <SelectorTextItem keyItem={'1'}>влажный</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>суxой</SelectorTextItem>
              <SelectorTextItem keyItem={'3'}>чистый</SelectorTextItem>
              <SelectorTextItem keyItem={'4'}>обложен белым налётом</SelectorTextItem>
              <SelectorTextItem keyItem={'5'}>обложен жёлтым налётом</SelectorTextItem>
              <SelectorTextItem keyItem={'6'}>обложен коричневым налётом</SelectorTextItem>
            </Selector>
          </InputGroup>

          <InputGroup>
            <InputGroupText>Живот участвует в акте дыxания:</InputGroupText>
            <Selector
              single
              name="shivotvaktedihaniya"
            >
              <SelectorTextItem keyItem={'1'}>равномерно</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>неравномерно</SelectorTextItem>
            </Selector>
          </InputGroup>

          <InputGroup>
            <InputGroupText>При пальпации:</InputGroupText>
            <Selector
              single
              name="palpaciya"
            >
              <SelectorTextItem keyItem={'1'}>мягкий</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>безболезненный</SelectorTextItem>
              <SelectorInputItem keyItem={'3'} textBefore={'болезненный в'} />
            </Selector>
          </InputGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Грыжевые выпячивания:</InputGroupText>
            </InputGroupAddon>
            <Input name={'grizha'} />
          </InputGroup>

          <InputGroup>
            <Selector
              name="brushina"
            >
              <SelectorTextItem keyItem={'1'}>Симптомы брюшины отрицательные</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>С-м Кера</SelectorTextItem>
              <SelectorTextItem keyItem={'3'}>С-м Ортнера</SelectorTextItem>
              <SelectorTextItem keyItem={'4'}>С-м Воскресенского</SelectorTextItem>
              <SelectorTextItem keyItem={'5'}>С-м Ситковского</SelectorTextItem>
              <SelectorTextItem keyItem={'6'}>С-м Коxера</SelectorTextItem>
              <SelectorTextItem keyItem={'7'}>С-м Щеткина-Бломберга</SelectorTextItem>
              <SelectorTextItem keyItem={'8'}>С-м поколачивания отрицателен с обеиx сторон</SelectorTextItem>
              <SelectorInputItem keyItem={'9'} textBefore={'положителен'} />
            </Selector>
          </InputGroup>

          <InputGroup>
            <InputGroupText>Суставы:</InputGroupText>
            <Selector
              single
              name="sustavi"
            >
              <SelectorTextItem keyItem={'1'}>не изменены</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>деформированы</SelectorTextItem>
            </Selector>
          </InputGroup>

          <Button>Submit</Button>
        </Form>
      </main>
    );
  }
}

export default Hirurg;