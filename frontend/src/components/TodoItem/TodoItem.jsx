import trash from "../../assets/trash.svg";

import "./TodoItem.css";

const TodoItem = ({ todoItem, removeTodoItem, completeTodoItem }) => {

    let todoTextStyle = "todo-text";

    if (todoItem.isCompleted) {
        todoTextStyle += " strikethrough";
    }

    return (
        <li className="todo-item">
            <input
                type="checkbox"
                className="check-box"
                onChange={() => completeTodoItem(todoItem.id)} />
            <span className={todoTextStyle}>
                {todoItem.description}
            </span>
            <img
                src={trash}
                className="trash"
                alt={`Remove todo: ${todoItem.description}`}
                onClick={() => removeTodoItem(todoItem.id)} />
        </li>
    );
};

export default TodoItem;