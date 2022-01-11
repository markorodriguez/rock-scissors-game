import React, { useState, useEffect } from "react";
import FinalItem from "./FinalItems";

import Scissors from "../images/icon-scissors.svg";
import Paper from "../images/icon-paper.svg";
import Rock from "../images/icon-rock.svg";

const StartedGame = (props) => {
    const [iconSelected, setIconSelected] = useState("");
    const [iconRandom, setIconRandom] = useState("");
    const [ready, setReady] = useState(false);
    const [styleSelected, setStyleSelected] = useState("");
    const [styleRandom, setStyleRandom] = useState("");
    const [winner, setWinner] = useState('');
    const [loser, setLoser] = useState('');



    useEffect(() => {

        switch (props.message) {
            case "You win":
                setLoser(' ')
                setWinner(' result')
                break;
            case "You lose":
                setLoser(' result')
                setWinner( ' ')
                break;
            case "Draw":
                setLoser(' ')
                setWinner(' ')
                break;
            default:
                break;
        }

        switch (props.selected) {
            case "scissors":
                setIconSelected(Scissors);
                setStyleSelected("item--scissors");
                break;
            case "rock":
                setIconSelected(Rock);
                setStyleSelected("item--rock");
                break;
            case "paper":
                setIconSelected(Paper);
                setStyleSelected("item--paper");
                break;
            default:
                break;
        }

        switch (props.random) {
            case "scissors":
                setIconRandom(Scissors);
                setStyleRandom("item--scissors");
                break;
            case "rock":
                setIconRandom(Rock);
                setStyleRandom("item--rock");
                break;
            case "paper":
                setIconRandom(Paper);
                setStyleRandom("item--paper");
                break;
            default:
                break;
        }

        setReady(true);
    }, [props.random, props.selected, props.message]);

    return (
        <div className="container-solution body">
            {ready === true ? (
                <div className="grid--112">
                    <div>
                        <FinalItem classId={styleSelected + winner} icon={iconSelected} />
                        <h1>You picked</h1>
                    </div>

                    <div>
                        <FinalItem classId={styleRandom + loser} icon={iconRandom} />
                        <h1>The house picked</h1>
                    </div>

                    <div className="message f-2d">
                        <h1>{props.message}</h1>
                        <button
                            onClick={() => {
                                props.reset();
                            }}
                        >
                            Play again
                        </button>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default StartedGame;
