import trash from "../../assets/trash.svg";

import "./TodoItem.css";

const TodoItem = ({ todoItem, removeTodoItem, completeTodoItem }) => {

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                className="check-box"
                onClick={() => completeTodoItem(todoItem.id)} />
            <div className="todo-text">
                {todoItem.description}
            </div>
            <img
                src={trash}
                className="trash"
                alt={`Remove todo: ${todoItem.description}`}
                onClick={() => removeTodoItem(todoItem.id)} />
        </div>
    );
};

export default TodoItem;