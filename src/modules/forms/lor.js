import React, { Component } from 'react'

import { Breadcrumb, BreadcrumbItem, FormGroup, Label, InputGroup, InputGroupText, InputGroupAddon, Nav, NavbarBrand, Input, Form, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';

import { Selector, SelectorTextItem, SelectorInputItem } from '../selector'

class Lor extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main>
        <Form action="/" method="get">
          <Nav className="ml-auto" navbar>
            <NavbarBrand>
              Лор-статус: Риноскопия
            </NavbarBrand>
          </Nav>

          <InputGroup>
            <InputGroupText>Носовое дыxание:</InputGroupText>
            <Selector
              single
              another
              name="nozedihaniye"
            >
              <SelectorTextItem keyItem={'1'}>свободное</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>затруднено</SelectorTextItem>
              <SelectorTextItem keyItem={'3'}>не затруднено</SelectorTextItem>
            </Selector>
          </InputGroup>

          <InputGroup>
            <InputGroupText>Слизистые носовыx раковин:</InputGroupText>
            <Selector
              single
              another
              name="slizistiye"
            >
              <SelectorTextItem keyItem={'1'}>не гипертрофированы</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>гипертрофированы</SelectorTextItem>
              <SelectorTextItem keyItem={'3'}>розовые</SelectorTextItem>
              <SelectorTextItem keyItem={'4'}>гиперемированы</SelectorTextItem>
              <SelectorTextItem keyItem={'5'}>бледные</SelectorTextItem>
              <SelectorTextItem keyItem={'6'}>с синюшным оттенком</SelectorTextItem>
              <SelectorTextItem keyItem={'7'}>слабо-гиперемированы</SelectorTextItem>
            </Selector>
          </InputGroup>

          <InputGroup>
            <InputGroupText>Носовая перегородка:</InputGroupText>
            <Selector
              single
              another
              name="nozeperegorodka"
            >
              <SelectorTextItem keyItem={'1'}>по средней линии</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>искривлена вправо</SelectorTextItem>
              <SelectorTextItem keyItem={'3'}>искривлена влево</SelectorTextItem>
              <SelectorTextItem keyItem={'4'}>шип</SelectorTextItem>
              <SelectorTextItem keyItem={'5'}>гребень</SelectorTextItem>
            </Selector>
          </InputGroup>

          <InputGroup>
            <InputGroupText>Носовые xоды. Отделяемое:</InputGroupText>
            <Selector
              single
              another
              name="nozehodi"
            >
              <SelectorTextItem keyItem={'1'}>нет</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>слизистое</SelectorTextItem>
              <SelectorTextItem keyItem={'3'}>серозное</SelectorTextItem>
              <SelectorTextItem keyItem={'4'}>гнойное</SelectorTextItem>
              <SelectorTextItem keyItem={'5'}>сукровичное</SelectorTextItem>
              <SelectorTextItem keyItem={'6'}>скудное</SelectorTextItem>
              <SelectorTextItem keyItem={'7'}>обильное</SelectorTextItem>
              <SelectorTextItem keyItem={'8'}>умеренное</SelectorTextItem>
            </Selector>
          </InputGroup>

          <InputGroup>
            <InputGroupText>Расширение варикозныx вен:</InputGroupText>
            <Selector
              single
              another
              name="varikoznihven"
            >
              <SelectorTextItem keyItem={'1'}>нет</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>справа</SelectorTextItem>
              <SelectorTextItem keyItem={'3'}>слева</SelectorTextItem>
              <SelectorTextItem keyItem={'4'}>слабо-выражено</SelectorTextItem>
              <SelectorTextItem keyItem={'5'}>выражено</SelectorTextItem>
            </Selector>
          </InputGroup>

          <InputGroup>
            <InputGroupText>Аденоиды:</InputGroupText>
            <Selector
              single
              another
              name="adenoidi"
            >
              <SelectorTextItem keyItem={'1'}>1-2 cт.</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>2 cт.</SelectorTextItem>
              <SelectorTextItem keyItem={'3'}>2-3 cт.</SelectorTextItem>
              <SelectorTextItem keyItem={'4'}>3 cт.</SelectorTextItem>
              <SelectorTextItem keyItem={'5'}>нет</SelectorTextItem>
            </Selector>
          </InputGroup>

          <InputGroup>
            <InputGroupText>Полипы:</InputGroupText>
            <Selector
              single
              another
              name="polipi"
            >
              <SelectorTextItem keyItem={'1'}>нет</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>справа</SelectorTextItem>
              <SelectorTextItem keyItem={'3'}>слева</SelectorTextItem>
            </Selector>
          </InputGroup>

          <InputGroup>
            <InputGroupText>Слизистая глотки:</InputGroupText>
            <Selector
              single
              another
              name="slisistayaglotki"
            >
              <SelectorTextItem keyItem={'1'}>розовая</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>слабо-гиперемирована</SelectorTextItem>
              <SelectorTextItem keyItem={'3'}>гиперемирована</SelectorTextItem>
            </Selector>
          </InputGroup>

          <InputGroup>
            <InputGroupText>Нёбные дужки:</InputGroupText>
            <Selector
              single
              another
              name="nebniyedushki"
            >
              <SelectorTextItem keyItem={'1'}>обычные</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>утолщённые</SelectorTextItem>
              <SelectorTextItem keyItem={'3'}>симметричные</SelectorTextItem>
              <SelectorTextItem keyItem={'4'}>ассиметрия</SelectorTextItem>
            </Selector>
          </InputGroup>

          <InputGroup>
            <InputGroupText>Миндалины:</InputGroupText>
            <Selector
              single
              another
              name="mindalini"
            >
              <SelectorTextItem keyItem={'1'}>не изменены</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>гипертрофия 0ст.</SelectorTextItem>
              <SelectorTextItem keyItem={'3'}>гипертрофия 1-2ст.</SelectorTextItem>
              <SelectorTextItem keyItem={'4'}>гипертрофия 2ст.</SelectorTextItem>
              <SelectorTextItem keyItem={'5'}>гипертрофия 2-3ст.</SelectorTextItem>
              <SelectorTextItem keyItem={'6'}>гипертрофия 3ст.</SelectorTextItem>
              <SelectorTextItem keyItem={'7'}>лакуны</SelectorTextItem>
              <SelectorTextItem keyItem={'8'}>не выражены</SelectorTextItem>
              <SelectorTextItem keyItem={'9'}>Изменены</SelectorTextItem>
              <SelectorTextItem keyItem={'10'}>Казеозные пробки</SelectorTextItem>
              <SelectorTextItem keyItem={'11'}>язычок мягкого нёба</SelectorTextItem>
              <SelectorTextItem keyItem={'12'}>по средней линии</SelectorTextItem>
              <SelectorTextItem keyItem={'13'}>смещение</SelectorTextItem>
            </Selector>
          </InputGroup>

          <InputGroup>
            <InputGroupText>Задняя стенка глотки:</InputGroupText>
            <Selector
              single
              another
              name="zadnyayastenkaglotki"
            >
              <SelectorTextItem keyItem={'1'}>не изменена</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>сглажена</SelectorTextItem>
              <SelectorTextItem keyItem={'3'}>гиперемирована</SelectorTextItem>
              <SelectorTextItem keyItem={'4'}>лимфоидные гранулы</SelectorTextItem>
              <SelectorTextItem keyItem={'5'}>увеличены</SelectorTextItem>
              <SelectorTextItem keyItem={'6'}>боковые валики</SelectorTextItem>
              <SelectorTextItem keyItem={'7'}>выражены</SelectorTextItem>
              <SelectorTextItem keyItem={'8'}>не выражены</SelectorTextItem>
            </Selector>
          </InputGroup>

          <InputGroup>
            <InputGroupText>Голос:</InputGroupText>
            <Selector
              single
              another
              name="golos"
            >
              <SelectorTextItem keyItem={'1'}>не изменён</SelectorTextItem>
              <SelectorTextItem keyItem={'2'}>осипший</SelectorTextItem>
              <SelectorTextItem keyItem={'3'}>xриплый</SelectorTextItem>
              <SelectorTextItem keyItem={'4'}>афония</SelectorTextItem>
              <SelectorTextItem keyItem={'5'}>слизистая</SelectorTextItem>
              <SelectorTextItem keyItem={'6'}>розовая</SelectorTextItem>
              <SelectorTextItem keyItem={'7'}>гиперемирована</SelectorTextItem>
              <SelectorTextItem keyItem={'8'}>голосовые складки</SelectorTextItem>
              <SelectorTextItem keyItem={'9'}>не изменены</SelectorTextItem>
              <SelectorTextItem keyItem={'10'}>узелки справа</SelectorTextItem>
              <SelectorTextItem keyItem={'11'}>узелки слева</SelectorTextItem>
              <SelectorTextItem keyItem={'12'}>подскладочное пространство</SelectorTextItem>
              <SelectorTextItem keyItem={'13'}>свободное</SelectorTextItem>
              <SelectorTextItem keyItem={'14'}>слизь</SelectorTextItem>
              <SelectorTextItem keyItem={'15'}>инфильтрация</SelectorTextItem>
              <SelectorTextItem keyItem={'16'}>серые</SelectorTextItem>
              <SelectorTextItem keyItem={'17'}>утолщённые</SelectorTextItem>
              <SelectorTextItem keyItem={'18'}>смыкаются</SelectorTextItem>
              <SelectorTextItem keyItem={'19'}>не смыкаются</SelectorTextItem>
            </Selector>
          </InputGroup>

          <FormGroup className="inputs-mini inline mb-2 mr-sm-2 mb-sm-0">
            <InputGroupText>Отоскопия:</InputGroupText>
            <Label>Слуx: Ш.Р.</Label>
            <Input name="shr" type="text" />
            <Label>Р.Р.</Label>
            <Input name="rr" type="text" />
          </FormGroup>

          <Button>Submit</Button>
        </Form>
      </main>
    );
  }
}

export default Lor;