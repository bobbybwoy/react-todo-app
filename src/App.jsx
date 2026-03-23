import { useState } from 'react'

import './App.css'
import TodoList from './containers/TodoList/TodoList'
import Header from './components/Header/Header';

function App() {

    const [todoId, setTodoId] = useState(1);
    const [todoList, setTodoList] = useState([
        {
            id: 1,
            description: "Todo Item 1",
            isCompleted: false,
        },
        {
            id: 2,
            description: "Todo Item 2",
            isCompleted: false,
        },
        {
            id: 3,
            description: "Todo Item 3",
            isCompleted: false,
        },
        {
            id: 4,
            description: "Todo Item 4",
            isCompleted: false,
        },
        {
            id: 5,
            description: "Todo Item 5",
            isCompleted: false,
        },
    ]);

    const resetTodoList = () => {
        setTodoList([]);
    }

    const addTodoItem = (e) => {
        console.log("addTodoItem()");
    };

    const removeTodoItem = (id) => {
        console.log("removeTodoItem()");
    };

    const completeTodoItem = (id) => {
        console.log("completeTodoItem()");
    };

    return (
        <div className="app">
            <Header resetTodoList={resetTodoList} />
            <TodoList
                todoList={todoList}
                removeTodoItem={removeTodoItem}
                completeTodoItem={completeTodoItem} />
        </div>
    )
}

export default App
