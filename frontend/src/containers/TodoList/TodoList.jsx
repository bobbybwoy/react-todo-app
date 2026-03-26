import TodoItem from "../../components/TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = ({ todoList, removeTodoItem, completeTodoItem }) => {

    const todos = todoList.map(todoItem => {

        return <TodoItem
            key={`todoItem-${todoItem.id}`}
            todoItem={todoItem}
            removeTodoItem={removeTodoItem}
            completeTodoItem={completeTodoItem} />
    });


    return (
        <ul className="todo-list">
            {todoList.length === 0
                ? <p>Nothing to see hear yet... Add a task in the field above! ☝️</p>
                : todos
            }
        </ul>
    )
};

export default TodoList;