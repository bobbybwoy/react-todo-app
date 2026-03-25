import "./Header.css";

const Header = ({ buttonFunction, title, buttonTitle }) => {

    return (
        <div className="header">
            <span className="heading">{title}</span>
            {buttonFunction && <span className="reset-button" onClick={buttonFunction}>{buttonTitle}</span>}
        </div>
    )
};

export default Header;