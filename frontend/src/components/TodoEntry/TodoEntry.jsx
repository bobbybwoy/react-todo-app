import plusIcon from "../../assets/plus.svg";

import "./TodoEntry.css";

const TodoEntry = ({ addTodoItem }) => {

    return (
        <form className="todo-entry" onSubmit={addTodoItem}>
            <input
                type="text"
                placeholder="Add your task here..."
                className="todo-description" />
            <button type="submit" className="submit-button"><img className="plus-icon" src={plusIcon} alt="Add todo item" /></button>
            {/* <img className="plus-icon" src={plusIcon} alt="Add todo item" /> */}
            {/* <input type="submit" value=} /> */}
        </form>
    );
}

export default TodoEntry;