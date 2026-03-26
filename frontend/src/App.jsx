import { useEffect, useState } from 'react'

import './App.css'
import TodoList from './containers/TodoList/TodoList'
import Header from './components/Header/Header';
import TodoEntry from './components/TodoEntry/TodoEntry';
import GamesList from './containers/GamesList/GamesList';

function App() {

    const [todoList, setTodoList] = useState([]);
    const API_URL = "http://localhost:3000";
    const OK = 200;
    const CREATED = 201;
    const NO_CONTENT = 204;

    const getTodosFromAPI = () => {
        fetch(`${API_URL}/todos/`)
            .then(resp => {
                if (resp.status !== OK) {
                    throw new Error("Could not retrieve the todos from the server");
                }
                return resp.json()
            })
            .then(data => {
                setTodoList(data);
            });
    };

    useEffect(getTodosFromAPI, []);

    const resetTodoList = () => {
        // setTodoList([]);
        fetch(`${API_URL}/todos`, {
            method: "DELETE",
        }).then(resp => {
            if (resp.status !== OK) {
                throw new Error("There was an issue deleting the todos from the server");
            }
            return resp.json();
        }).then(data => {
            setTodoList(data);
        });
    }

    const addTodoItem = (e) => {
        e.preventDefault();
        if (e.target[0].value === "") {
            alert("please enter a todo");
            return;
        }

        const bodyText = JSON.stringify({
            todo: e.target[0].value,
        });

        fetch(`${API_URL}/todos/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: bodyText,
        }).then(resp => {
            if (resp.status !== CREATED) {
                throw new Error("There was a problem storing the todo item");
            }
            return resp.json();
        }).then(data => {
            setTodoList(data);
        });

        e.target.reset();
    };

    const removeTodoItem = (id) => {
        // setTodoList([...todoList].filter(todo => todo.id !== id));
        fetch(`${API_URL}/todos/${id}`, {
            method: "DELETE",
        }).then(resp => {
            if (resp.status !== OK) {
                throw new Error(`There was an error attempting to delete item ${id}`);
            }

            return resp.json();
        }).then(data => {
            console.log(data);
            setTodoList(data);
        });
    };

    const completeTodoItem = (id) => {
        fetch(`${API_URL}/todos/${id}`, {
            method: "PUT",
        }).then(resp => {
            if (resp.status !== OK) {
                throw new Error(`There was an issue trying to mark the todo as complete for ${id}`);
            }

            return resp.json();
        }).then(data => {
            setTodoList(data);
        });
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
