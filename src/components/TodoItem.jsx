import React, {useState} from 'react'
import styles from './todo.module.css'

const TodoItem = ({todo, deleteTodo}) => {

    const [isCompleted, setIsCompleted]=useState(todo.isCompleted)

  return (
    <div key={todo.id} className={styles.todo}>
        
        <input className={styles.checkbox} type="checkbox" checked={isCompleted} onChange={(e)=>{
            setIsCompleted(e.target.checked)                   
        }}/>
        <label className={isCompleted ? styles.striked : ""}>{todo.value}</label>
        <button className={styles.btn} onClick={()=>deleteTodo(todo.id)}>Delete</button>
        
    
    </div>
  )
}

export default TodoItem