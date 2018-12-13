import React, { Component } from 'react'

import { ButtonGroup } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';

import { AnotherItem, Item, NewAnotherItem } from './index'
import { createSelectorItem } from '../index';

/*
    items - элементы
    single - выбрать можно только 1 вариант
    another - возможность дописать свой вариант
    anothers - возможность дописывать свои варианты
    selected - по умолчанию выделенные элементы
    onReSelect - cобытие при изменении selected( [positions], [items] )
      single==true: onSelect( position, item ),
      single==false: onSelect( [positions], [items] )

    не менять single в процессе жизненного цикла, только если удалить и создать новый
    anothers==true не работает с single==true

    item: {
      key: string,
      val: ReactComponent
    }
*/

class Selector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: props.children,
      selected: props.selected ? props.selected : [],
      anotherItemsCount: 0
    };

    this.toggleItem         = this.toggleItem.bind(this);
    this.invokeOnReSelect   = this.invokeOnReSelect.bind(this);
    this.newAnotherItem     = this.newAnotherItem.bind(this);
    this.removeAnotherItem  = this.removeAnotherItem.bind(this);
    this.changeElement      = this.changeElement.bind(this);
    this.removeElement      = this.removeElement.bind(this);
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

    this.invokeOnReSelect( newSelected );
  }

  /*
      keys==[key,...]
  */
  invokeOnReSelect( keys ) {
    if( !('onReSelect' in this.props) )
      return;

    if( this.props.single )
      this.props.onReSelect( keys[0], this.state.items.find( item => item.key === keys[0] ).value );
    else {
      this.props.onReSelect( keys.map( key => ({
        key: key,
        value: this.state.items.find( item => item.key === key ).value
      }) ) );
    }
  }

  newAnotherItem( value ) {
    if( value === '' )
      return;

    const key = 'another' + this.state.anotherItemsCount;

    this.setState( (oldState) => ({
      anotherItemsCount: oldState.anotherItemsCount + 1,
      items: [
        ...oldState.items,
        createSelectorItem(
          key,
          value,
          ( change, remove ) =>
            <AnotherItem
              change={change}
              remove={remove}
            >
              value
            </AnotherItem>
        )
      ]
    }) );

  }

  changeElement( key, value ) {
    console.log('c',key,value);
  }

  removeElement( key ) {
    console.log('r',key);
  }

  // position соответствует position anotherItems в render
  removeAnotherItem( position ) {
    if( position < this.props.items.length )
      return;

    position -= this.props.items.length;

    this.setState( (oldState) => ({
      anotherItems: oldState.anotherItems.filter( (el,i) => i !== position )
    }) );
  }

  render() {
    const { another, anothers } = this.props;
    const { selected, anotherItemsCount, items } = this.state;

    const anotherActive = anothers || (another && anotherItemsCount === 0);

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