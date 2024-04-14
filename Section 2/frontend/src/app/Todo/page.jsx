'use client'
import React, { useState } from 'react';

const Todo = () => {

     const [todolist, setTodolist] = useState([
        { task:'Do homeWork',completed:false },
        { task:'Eat',completed:false },
        { task:'watch movies',completed:false }
     ])     
    const addtask=(e)=>{
        if(e.code ==='Enter'){
            console.log(e.target.value);
        }
       
    }


  return (
    <div className='container py-5'>
     <h2 className='text-center'>Todo App</h2>
     <hr />
        <div className="card">
            <div className="card-header">
                <input onKeyDown={addtask} type="text" className='form-control border-primary border-2'/>
            </div>
            <div className="card-body">
                {
                    todolist.map( (todo)=>{
                        return <div>
                            <p>{todo.task}</p>
                            <button className='btn btn-danger'>Delete</button>
                        </div>
                    } )
                }
            </div>
        </div>
    </div>
  );
}

export default Todo;
