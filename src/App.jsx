import { useState } from 'react'

import './App.css'
import TodoList from './containers/TodoList/TodoList'
import Header from './components/Header/Header';
import TodoEntry from './components/TodoEntry/TodoEntry';
import GamesList from './containers/GamesList/GamesList';

function App() {

    const [todoId, setTodoId] = useState(1);
    const [todoList, setTodoList] = useState([]);

    const resetTodoList = () => {
        setTodoList([]);
    }

    const addTodoItem = (e) => {
        e.preventDefault();
        if (e.target[0].value === "") {
            alert("please enter a todo");
        }

        const newTodoItem = {
            id: todoId,
            description: e.target[0].value,
            isCompleted: false,
        };

        setTodoList([...todoList, newTodoItem]);
        setTodoId(todoId + 1);
        e.target.reset();
    };

    const removeTodoItem = (id) => {
        setTodoList([...todoList].filter(todo => todo.id !== id));
    };

    const completeTodoItem = (id) => {
        const newTodoList = [...todoList];
        const todoIndex = newTodoList.findIndex(todo => todo.id === id);
        newTodoList[todoIndex].isCompleted = !newTodoList[todoIndex].isCompleted;
        setTodoList(newTodoList); // I am not happy with this...
    };

    return (
        <div className="app">
            <Header buttonFunction={resetTodoList} title={"My Todos"} buttonTitle={"Reset"} />
            <TodoEntry addTodoItem={addTodoItem} />
            <TodoList
                todoList={todoList}
                removeTodoItem={removeTodoItem}
                completeTodoItem={completeTodoItem} />

            <GamesList />
        </div>
    )
}

export default App
