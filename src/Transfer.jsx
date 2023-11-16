import React from 'react'

function Transfer({myid,handleTask,addTask,todoList,deleteData}) {
   
    return (
        <div className='container'>
          <input type="text" placeholder='enter task name' onChange={handleTask}/>
          <button onClick={addTask}>ADD TASK</button>
          <h2>Total Data is {todoList.length}</h2>
          {
            todoList.length>0 ? <h2>{myid} Deleted</h2> : ""
          }
          
              {
                 
                  todoList.map((task)=>(
                    <div>
                      
                      <div className='ee' key={task.id}>
                        <h3>{task.id}</h3>
                        <h3>{task.taskName}</h3>
                        <button onClick={()=>deleteData(task.id)}>X</button>
                         
                      </div>
                         
                      </div>
                      
    
                     
                  ))
              }
        </div>
      )
}

export default Transfer