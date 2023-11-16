import React, { useState } from 'react'
import Transfer from './Transfer';

function App() {
  const [todoList,settodoLists] = useState([]);
  const [newTask, setnewTask] = useState("");
  const [myid,setMyid] = useState("")
 
  const handleTask = (e)=>{
      setnewTask(e.target.value)
 
  }
  const addTask = ()=>{
        const newTaskData = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id+1,
            taskName:newTask 
        }
        settodoLists([...todoList,newTaskData]) //spread opertaor
  }

  const deleteData = (id)=>{
      const newList = todoList.filter((task)=> task.id !== id);
      settodoLists(newList);
      setMyid(id)
  }
 
  return(
    <Transfer myid={myid} handleTask={ handleTask} addTask={addTask} todoList={todoList} deleteData={deleteData}/>
  ) 
}


export default App