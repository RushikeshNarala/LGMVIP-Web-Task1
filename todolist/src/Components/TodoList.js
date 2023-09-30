import React,{useState} from 'react'
import TodoForm from './TodoForm'
import Todos from './Todos';

export default function TodoList() {

    // State Array Which hold all Todos
    const [todos,setTodos] = useState([]);


    // adding Todo into Array
    const addTask = (task) =>{
       if(!task.text){
            return
        }
        const newTodos = [task,...todos];
        setTodos(newTodos);
    }

    // Removing Todo from Array
     const removetask = (id) =>{
      let updatedtasks =[...todos].filter(task =>task.id !==id)
      setTodos(updatedtasks);
     }


    // Completed Todo
    const completedtask = (id) =>{
      let updatedtasks = todos.map(todo=>{
        if(todo.id === id){
          todo.isCompleted = true;
        }
        return todo;
      })
      setTodos(updatedtasks);
    }

  return (
    <div> 
        <TodoForm addTask={addTask} />
        <Todos todos={todos} removetask={removetask} completedtask={completedtask}/>
        
    </div>
  )
}
