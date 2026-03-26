import "./GamesList.css";

import GameItem from "../../components/GameItem/GameItem";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";

const GamesList = () => {
    const [gamesList, setGamesList] = useState([]);
    const [isSuccessful, setIsSuccessful] = useState(false);

    const getZeldaGames = () => {
        fetch("https://zelda.fanapis.com/api/games?limit=100")
            .then(res => res.json())
            .then(res => {
                setIsSuccessful(res.success);
                // console.log(res.data);
                setGamesList(res.data);
            });
    };

    useEffect(getZeldaGames, []);

    return (
        <>
            {/* <h1>Zelda Games</h1> */}
            <Header title={"Zelda Games"} />
            {/* <GameItem /> */}
            <div className="game-list">
                {isSuccessful
                    ? gamesList.map(game => <GameItem key={game.id} game={game} />)
                    : <p>We have a problem with API...</p>
                }
            </div>
        </>
    );
};

export default GamesList;