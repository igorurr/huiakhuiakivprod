/*
  key: string
  defVal: string
  funcElem: (change) => <ReactComponent />
  change: function(value)

  return:
   key: string
   value: string
   funcComponent: (change) => <ReactComponent />
    change: function(key,value)

  createItem(
    'key',
    'v',
    ( change, remove ) =>
      <button onAction1={() => change('sdfsdf')} onAction2={() => remove()}>
        aaa
      </button>
  );

  children.forEach( el => {
    components.push( el.funcComponent );
    kvs.push({ key: el.key, value: el.value });
  });
*/

export default ( key, defVal, funcElem ) => ({
  key: key,
  value: defVal,
  funcComponent: ( change, remove ) => funcElem( (value)=>change(key,value), ()=>remove(key) )
});