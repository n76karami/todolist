import React, { useState } from 'react';
import { createContext } from 'react';
import Main from './Main';

const UID = () => `${new Date().getTime()}${String(Math.random()).slice(3, 8)}`;

export const todolistcontext = createContext();

const Context = () => {

  const [todolist, settodolist] = useState([
    {
      text: "walk the dog",
      col: 1,
      isSelected: false,
      id: UID()
    },
    {
      text: "feed the cat",
      col: 0,
      isSelected: false,
      id: UID()
    }
  ]);
  const [inputValue, setInputvalue] = useState('');

  //move to right
  const Toright = () => {
    const ar = [...todolist];//clone
    ar.forEach((item) => {
      if (item.col  && item.isSelected == true) {
        item.col = 0;
        item.isSelected = false;
      }
    });
    settodolist(ar);
  }

  //move to left
  const Toleft = () => {
    const ar = [...todolist];//clone
    ar.forEach((item) => {
      if ( !item.col && item.isSelected == true) {
        item.col = 1;
        item.isSelected = false;
      }
    });
    settodolist(ar);
  }

  //Delete Item
  const deleteItem = () => {
    const ar = [...todolist];//clone
    const del = ar.filter(item => !item.isSelected);
    settodolist(del);
  }

  //select Li
  const selected = (id) => {
    const ar = [...todolist];//clone
    const index = ar.findIndex(item => item.id === id)
    // console.log(index);
    ar[index].isSelected = !ar[index].isSelected;
    settodolist(ar);
      
  }
  
  //create obj and add to todolist
  const addItem = () => {

    if (!inputValue) return alert('enter sth')

    const obj = {
      text: inputValue,
      col: Math.round(Math.random()),  
      isSelected: false,
      id: UID()
    }

    // 1) clone
    const arr = [...todolist]
    // 2) modification
    arr.push(obj)
    // 3) setState
    settodolist(arr)
    setInputvalue('')
  }

  return (
    <div>
      <todolistcontext.Provider value={{
        data: todolist,
        addTodo: addItem,
        selectTodo: selected,
        deleteTodo: deleteItem,
        moveRight: Toright,
        moveLeft: Toleft,
        input : inputValue ,
        updateinput : setInputvalue
      }}>
        
        <Main />
        
      </todolistcontext.Provider>
    </div>
  )

}
export default Context;
