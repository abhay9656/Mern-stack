'use client'
import React, { useState } from 'react';

const Todo = () => {

     const [todolist, setTodolist] = useState([
        // { task:'Do homeWork',completed:false },
        // { task:'Eat',completed:false },
        // { task:'watch movies',completed:false },
        // { task:'play games',completed:false }
     ])     
    const addtask=(e)=>{
        if(e.code ==='Enter'){
            console.log(e.target.value);

            setTodolist( [...todolist,{task:e.target.value,completed:false}]);
            e.target.value=''
        }
       
    }

    const deteteTask=(index)=>{
        console.log(index);
        const temp=todolist
        temp.splice(index,1)
        setTodolist([...temp]);
    }

    const finishTask=(index)=>{
        const temp=todolist;
        temp[index].completed= !temp[index].completed;
        console.log(temp)
        setTodolist([...temp]);
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
                    todolist.map( (todo,index)=>{
                        return <div className='d-flex justify-content-between align-item-center p-3'>
                            <p>{todo.task}</p>

                            {todo.completed ?
                            <span className='badge bg-success'>Completed</span>
                            :
                            <span className='badge bg-warning'>Pending</span>
                            }

                            <div>
                            <button onClick={()=>{finishTask(index)}} className='btn btn-primary me-3'>

                            {todo.completed ? "undo" : "pending"}
                            
                            </button>
                            <button onClick={ ()=>{deteteTask(index)} } className='btn btn-danger'>Delete</button>
                            </div>
                        </div>
                    } )
                }
            </div>
        </div>
    </div>
  );
}

export default Todo;
