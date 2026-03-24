import trash from "../../assets/trash.svg";

import "./TodoItem.css";

const TodoItem = ({ todoItem, removeTodoItem, completeTodoItem }) => {
    console.log(todoItem.isCompleted)

    let todoTextStyle = "todo-text";

    if (todoItem.isCompleted) {
        todoTextStyle += " strikethrough";
    }

    return (
        <li className="todo-item" key={todoItem.id}>
            <input
                type="checkbox"
                className="check-box"
                onClick={() => completeTodoItem(todoItem.id)} />
            <div className={todoTextStyle}>
                {todoItem.description}
            </div>
            <img
                src={trash}
                className="trash"
                alt={`Remove todo: ${todoItem.description}`}
                onClick={() => removeTodoItem(todoItem.id)} />
        </li>
    );
};

export default TodoItem;