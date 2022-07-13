import React from 'react';

const Todo = ({text, id, todos, todo, setTodos}) => {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }));
    }
    return (
        <div className="todo" >
            <div className='todo-container' onClick={completeHandler}>
            <button className={`todo-item ${todo.completed ? "completed" : "complete-btn"}`}>
                <i className='fas fa-check'></i>
            </button>
            <li key={id} className={`todo-item ${todo.completed ? "text-completed" : ""}`}>{text}</li>
            </div>
            <button className='trash-btn' onClick={deleteHandler}>
            <i class="fa fa-times" aria-hidden="true"></i>
            </button>
        </div>

    );
}
 
export default Todo;