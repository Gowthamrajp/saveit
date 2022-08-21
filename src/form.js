import React from 'react'
//import TodoList from './TodoList';

function Form({inputText, setInputText,todos,setTodos,setStatus}) {
  function inputTextHandler(e){
    
  }  
  function submitTodoHandler(e){
    e.preventDefault();
    if(inputText!==''){
    
    }else
    alert("Submit after pasting links to track");
  }
  
  
  return (
    <form>
      <input value={inputText} onChange ={inputTextHandler} type="text" className="todo-input" />
      <button  onClick={submitTodoHandler} className="button" type="submit">
        
      </button>
      
    </form>
  )
}

export default Form