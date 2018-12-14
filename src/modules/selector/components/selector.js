import React, { Component } from 'react'

import { ButtonGroup } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';

import { SelectorInputItem, Item, NewAnotherItem } from './index'
import { createSelectorItem } from '../index';

/*
    items - элементы
    single - выбрать можно только 1 вариант
    another - возможность дописать свой вариант
    anothers - возможность дописывать свои варианты
    selected - по умолчанию выделенные элементы
    onChange - cобытие при изменении selected( [positions], [items] )
      single==true: onSelect( position, item ),
      single==false: onSelect( [positions], [items] )

    не менять single в процессе жизненного цикла, только если удалить и создать новый
    anothers==true не работает с single==true

    item: {
      key: string,
      val: ReactComponent
    }

    <SelectorTextItem keyItem={'1'}>на приёме</SelectorTextItem>
    { createSelectorItem( '2', 'w', ( change, remove ) => 'на дому' ) }
*/

class Selector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.childrenToItems( props.children ),
      selected: props.selected ? props.selected : [],
      nextAnotherItem: 0
    };

    this.childrenToItems    = this.childrenToItems.bind(this);
    this.toggleItem         = this.toggleItem.bind(this);
    this.invokeOnChange     = this.invokeOnChange.bind(this);
    this.newAnotherItem     = this.newAnotherItem.bind(this);
    this.changeElement      = this.changeElement.bind(this);
    this.removeElement              = this.removeElement.bind(this);
    this.updateSelectedAfterRemove  = this.updateSelectedAfterRemove.bind(this);
  }

  childrenToItems( children ) {
    if ( Array.isArray(children) )
      return children.map( this.childrenToItem );

    else
      return [ this.childrenToItem( children ) ];
  }

  childrenToItem( item ) {
    if( !item.type )
      return item;

    return item.type(item.props);
  }

  toggleItem( key ) {
    const item = this.state.items.find( item => item.key === key );

    if( item === undefined )
      return;

    let newSelected;

    if( this.props.single )
      newSelected = [ key ];
    else {
      if( this.state.selected.includes( key ) )
        newSelected = this.state.selected.filter( (sKey) => sKey !== key );
      else
        newSelected = [ ...this.state.selected, key ];
    }

    this.setState({
      selected: newSelected
    });

    this.invokeOnChange( newSelected );
  }

  /*
      keys==[key,...]
  */
  invokeOnChange(keys ) {
    if( !('onChange' in this.props) )
      return;

    if( this.props.single )
      this.props.onChange( keys[0], this.state.items.find( item => item.key === keys[0] ).value );
    else {
      this.props.onChange( keys.map( key => ({
        key: key,
        value: this.state.items.find( item => item.key === key ).value
      }) ) );
    }
  }

  newAnotherItem( value ) {
    if( value === '' )
      return;

    const key = 'another' + this.state.nextAnotherItem;

    this.setState( (oldState) => ({
      nextAnotherItem: oldState.nextAnotherItem + 1,
      items: [
        ...oldState.items,
        this.childrenToItem( <SelectorInputItem keyItem={key} value={value} removable /> )
      ]
    }) );

  }

  changeElement( key, value ) {
    let items = this.state.items;
    let item = items.find( el => el.key === key );
    item.value = value;

    this.setState({
      items
    });

    if ( this.state.selected.find( el => el === key ) !== undefined )
      this.invokeOnChange( this.state.selected );
  }

  removeElement( key ) {
    const items = this.state.items.filter( el => el.key !== key );

    this.setState({
      items: items
    });

    this.updateSelectedAfterRemove( key );
  }

  updateSelectedAfterRemove( key ) {
    if ( this.state.selected.find( el => el === key ) === undefined )
      return;

    const selected = this.state.selected.filter( el => el !== key );

    this.setState({
      selected
    });

    this.invokeOnChange( selected );
  }

  render() {
    const { another, anothers } = this.props;
    const { selected, nextAnotherItem, items } = this.state;

    const anotherActive = anothers || (another && nextAnotherItem === 0);

    return (
      <ButtonGroup className={'selector'} >
        { items.map( el => {
          const { key, funcComponent } = el;
          return (
            <Item
              key={key}
              isActive={selected.includes(key)}
              onClick={() => this.toggleItem(key)}
            >
              { funcComponent( this.changeElement, this.removeElement ) }
            </Item>
          );
        } ) }

        { /*anotherItems.map( (el,i)=>{
          const position = i+items.length;
          return (
            <AnotherItem
              isInput
              key={el+position}
              isActive={selected.includes(position)}
              onClick={() => this.toggleItem(position)}
              onRemove={() => this.removeAnotherItem(position)}
              text={el}
            />
          )
        } )*/ }

        { anotherActive ? ( <NewAnotherItem onBlur={e => this.newAnotherItem(e.target.value)} /> ) : null }

      </ButtonGroup>
    );
  }
}

export default Selector;