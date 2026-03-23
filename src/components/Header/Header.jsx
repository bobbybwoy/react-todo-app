import "./Header.css";

const Header = ({ resetTodoList }) => {

    return (
        <div className="header">
            <span className="heading">My Todos</span>
            <span className="reset-button" onClick={resetTodoList}>Reset</span>
        </div>
    )
};

export default Header;