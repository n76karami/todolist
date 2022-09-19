import React, { useContext } from 'react';
import { todolistcontext, inputValuecontext } from './context';

const Main = () => {

  const todolist = useContext(todolistcontext);
  
  //create li and add to ul
  const sortItems = (number) =>
    todolist.data
      .filter(item => item.col == number)
      .map((item, index) => <li key={index} onClick={()=> todolist.selectTodo(item.id)}  className={item.isSelected ? 'select' :''}>{item.text}</li>);
  
  //col 1
  const newLi1 = sortItems(1)
  //col 0
  const newLi2 = sortItems(0)

  return (
    <>
      <div className="header">
        
        <div id="h">
          
          <h1>لیست انجام کارها</h1>
          
        </div>
        
        <div id="text">
          <input
            type="text" 
            placeholder="کار را وارد کنید..." 
            value={todolist.input}
            onChange={e => {
              todolist.updateinput(e.target.value)
            }}
          />
          
            <span id="add" className="addBtn" onClick={todolist.addTodo} >&#43;</span>
                  
        </div>
        
      </div>
      <div id="list1">
          <ul id="myUL1">
              {newLi1}
          </ul>
      </div>
      <div id = "buttons">
          <button className="b" id="R" onClick={todolist.moveRight}>&#129154;</button>
          <button className="b" id="L" onClick={todolist.moveLeft}>&#129152;</button>
          <button className="b" id="D" onClick={todolist.deleteTodo}>&#x1F5D1;</button>
      </div>
      <div id="list2">
          <ul id="myUL2">
              {newLi2}
          </ul>
      </div>
    </>
  )

}
export default Main;
