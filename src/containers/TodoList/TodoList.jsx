import TodoItem from "../../components/TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = ({ todoList, removeTodoItem, completeTodoItem }) => {
    // console.log(todoList);

    const todos = todoList.map(todoItem => {
        return <TodoItem
            todoItem={todoItem}
            removeTodoItem={removeTodoItem}
            completeTodoItem={completeTodoItem} />
    });


    return (
        <div className="todo-list">
            {todoList.length === 0
                ? <p>Nothing to see hear yet... Add a task in the field above! ☝️</p>
                : todos
            }
        </div>
    )
};

export default TodoList;