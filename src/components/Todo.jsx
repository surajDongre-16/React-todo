import React, {useState} from 'react'
import TodoList from './TodoList'
import TodoItem from './TodoItem'
import styles from './todo.module.css'

const Todo = () => {

    const [value,setValue]=useState("")
    const [todos, setTodos] = useState([])

    const deleteTodo=(id)=>{
        setTodos(todos.filter((todo)=> todo.id !== id))
    }



  return (
    <div >
        <h1>Todo App</h1>
        <div className={styles.input}>
            <input className={styles.input_box} size='30' placeholder='Write Something' type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
            <button className={styles.input_btn} onClick={()=>{
                setTodos([...todos,{
                    id:Date.now(),
                    value:value,
                    isCompleted:false
                }])
                setValue("")
            }}>+</button>
        </div>
        
        <TodoList>
            <div>
                {todos.map((todo)=>(
                    <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo}/>
                ))}
            </div>
        </TodoList>
    </div>
  )
}

export default Todo