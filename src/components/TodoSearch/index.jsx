import React from 'react';
import { TodoContext } from '../todoContext'
import './TodoSearch.css';

function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext);
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  

  return [ 
    <input 
      className="TodoSearch" 
      placeholder="Escribe el TODO que buscas" 
      value={searchValue}
      onChange={onSearchValueChange}
    />
  ];
}

export { TodoSearch };