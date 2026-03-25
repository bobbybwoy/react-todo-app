import "./GameItem.css";

const GameItem = ({ game }) => {

    return (
        <article className="game-item">
            <h3 className="game-name">{game.name}</h3>
            <div className="game-content">
                <section className="game-description">{game.description}</section>
                <section className="game-info">
                    <p><strong>Developer:</strong> {game.developer}</p>
                    <p><strong>Published by:</strong> {game.publisher}</p>
                    <p><strong>Released on:</strong> {game.released_date}</p>
                </section>
            </div>
        </article>
    );
};

export default GameItem;