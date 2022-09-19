import { useState } from "react";

const UID = () => `${new Date().getTime()}${String(Math.random()).slice(3,8)}`

const App = () =>{

  const [inputValue, setInputvalue] = useState('');
  const [todolist, settodolist] = useState([
    {   
      text: "walk the dog",
      col: 1,  
      isSelected: false,
      id: UID()
    },
    {
      text: "feed the cat",
      col: 0 ,
      isSelected: false,
      id: UID()
    }
  ]);
  
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
  
    //create li and add to ul
  const sortItems = (number) =>
    todolist
      .filter(item => item.col == number)
      .map((item, index) => <li key={index} onClick={()=> selected(item.id)} className={item.isSelected ? 'select' :''}>{item.text}</li>);
  
  //col 1
  const newLi1 = sortItems(1)
  //col 0
  const newLi2 = sortItems(0)
  

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
    <>
      
      <div className="header">
        
        <div id="h">
          
          <h1>لیست انجام کارها</h1>
          
        </div>
        
        <div id="text">
          <input
            type="text" 
            placeholder="کار را وارد کنید..." 
            value={inputValue}
            onChange={e => {
              setInputvalue(e.target.value)
            }}
          />
          
            <span id="add" className="addBtn" onClick={addItem} >&#43;</span>
                  
        </div>
        
      </div>   
      
      <div id="list1">
          <ul id="myUL1">
              {newLi1}
          </ul>
      </div>
      <div id = "buttons">
          <button className="b" id="R" onClick={Toright}>&#129154;</button>
          <button className="b" id="L" onClick={Toleft}>&#129152;</button>
          <button className="b" id="D" onClick={deleteItem}>&#x1F5D1;</button>
      </div>
      <div id="list2">
          <ul id="myUL2">
              {newLi2}
          </ul>
      </div>

    </>
  )
}

export default App;