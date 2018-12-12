import React, { Component } from 'react'

import { ButtonGroup } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';

import { AnotherItem, Item, NewAnotherItem } from './index'

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
*/

class Selector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: props.selected ? props.selected : [],
      anotherItems: []
    };

    this.toggleItem         = this.toggleItem.bind(this);
    this.invokeOnReSelect   = this.invokeOnReSelect.bind(this);
    this.posToItem          = this.posToItem.bind(this);
    this.newAnotherItem     = this.newAnotherItem.bind(this);
    this.removeAnotherItem  = this.removeAnotherItem.bind(this);
  }

  toggleItem( i ) {
    // защита от ситуации когда тыкаем на форму нового элемента чтоб его написать и добавить,
    // а вызывается toggleItem, xотя мы ещё ничего не написали
    if( this.posToItem(i) === undefined )
      return;

    let newSelected;

    if( this.props.single )
      newSelected = [ i ];
    else {
      if( this.state.selected.includes(i) )
        newSelected = this.state.selected.filter( (el) => el !== i );
      else
        newSelected = [ ...this.state.selected, i ];
    }

    this.setState({
      selected: newSelected
    });

    this.invokeOnReSelect( newSelected );
  }

  newAnotherItem( item ) {
    if( item === '' )
      return;

    this.setState( (oldState) => ({
      anotherItems: [ ...oldState.anotherItems, item ]
    }) );

  }

  // position соответствует position anotherItems в render
  removeAnotherItem( position ) {
    if( position < this.props.items.length )
      return;

    position -= this.props.items.length;

    this.setState( (oldState) => ({
      anotherItems: oldState.anotherItems.filter( (el,i) => i != position )
    }) );
  }

  /*
      items==[number,...]
  */
  invokeOnReSelect( positions ) {
    if( !('onReSelect' in this.props) )
      return;

    if( this.props.single )
      this.props.onReSelect( positions[0], this.posToItem(positions[0]) );
    else {
      console.log('df')
      this.props.onReSelect(
        positions,
        positions.map( position => this.posToItem(position) )
      );
    }
  }

  posToItem( position ) {
    return position < this.props.items.length ?
      this.props.items[position] :
      this.state.anotherItems[position-this.props.items.length];
  }

  render() {
    const { single, another, anothers, items } = this.props;
    const { selected, anotherItems } = this.state;

    const anotherPosition = items.length + anotherItems.length;

    const anotherActive = anothers || (another && anotherItems.length === 0);

    return (
      <ButtonGroup className={'selector'} >

        { items.map( (el,i)=>(
          <Item
            key={el+i}
            isActive={selected.includes(i)}
            onClick={() => this.toggleItem(i)}
            text={el}
          />
        ) ) }

        { anotherItems.map( (el,i)=>{
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
        } ) }

        { anotherActive ? (
          <NewAnotherItem
            isInput
            onClick={() => this.toggleItem(anotherPosition)}
            onBlur={(e)=>this.newAnotherItem(e.target.value)}
            text=''
          />
        ) : null }

      </ButtonGroup>
    );
  }
}

export default Selector;