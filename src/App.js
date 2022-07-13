import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import axios from "axios";

function App() {

  const [inputText, setInputText] = useState ("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/1/todos`).then((res) =>{
      const responseTodo = res.data;
      setTodos(responseTodo);
    });
  }, []);
  console.log(todos);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch(status) {
      case "completed" : 
      setFilteredTodos(todos.filter(todo => todo.completed === true))
      break;
      case "notCompleted" :
      setFilteredTodos(todos.filter(todo => todo.completed === false))
      break;
      default:
      setFilteredTodos(todos);
      break;
    }
  };

  return (
    <div>
     <header> 
       <h1>Things to do </h1>
     </header>
     <TodoList 
     setTodos={setTodos} 
     todos={todos}
     filteredTodos= { filteredTodos}
     />
     <Form 
     inputText={inputText} 
     todos={todos} 
     setTodos={setTodos} 
     setInputText={setInputText}
      setStatus= {setStatus}
      />
    </div>
  );
}

export default App;
