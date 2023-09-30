import React ,{useState} from 'react'


 function TodoForm({addTask}) {

    const [input,setInput] = useState("");

    let task = {id:Math.floor(Math.random() * 1000000),text:input,isComplete:false};

    const handleChange = e =>{
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
           addTask(task);
        setInput('')
    }


  return (
    <form className='form-input'>
         <div className='form-text'>My To Do List</div>
         <div className='inner-form-input'>
        <input type='text' placeholder='Enter the task' onChange={handleChange} value={input} className='todo-input' />
        <button type='submit' className='todo-btn' onClick={handleSubmit} >ADD TODO</button>
        </div>
    </form>
    
  );
}

export default TodoForm;