import React from 'react'
import {TiTick} from 'react-icons/ti'
import {RiCloseCircleLine} from 'react-icons/ri'


export default function Todos({todos,removetask,completedtask}) {


  return todos.map((todos,index)=>(
    <div className={todos.isCompleted ? 'Completed task-div':'task-div'} key={index}>
      <div className='todo-text'> {todos.text} </div>
      <div className='icons' key={todos.id}>
        <TiTick onClick={()=>{completedtask(todos.id)}} className='TiTick'></TiTick>
        <RiCloseCircleLine onClick={()=>{removetask(todos.id)}} className='RiCloseCircleLine' ></RiCloseCircleLine>
      </div>
    </div>
  ))
  
}
