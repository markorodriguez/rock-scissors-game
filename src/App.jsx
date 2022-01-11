import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import StartedGame from "./Components/StartedGame";

const App = () => {
    const [start, setStarted] = useState(false);
    const [selected, setSelected] = useState("Initial Selected");
    const [random, setRandom] = useState("Initial Random");
    const [score, setScore] = useState(0)
    const [msg, setMsg] = useState("You Win");


    const getSelectedValue = (value) => {
        validateGame(value);
        setStarted(true);
    };

    useEffect(()=>{

        /*eslint-disable */
       
        const storedScore = localStorage.getItem('score')

        if(storedScore === null){
            localStorage.setItem('score', 0)
        }
         setScore(score)
        localStorage.setItem('score', score)
        
    }, [score])

    /*eslint-enable */
    useEffect(()=>{
        if(score<0){
            setScore(0)
        }

    }, [score])

    const validateGame = (param) => {
        
        const options = ["rock", "paper", "scissors"];
        const randomChoice = options[Math.floor(Math.random() * (2 - 0 + 1) + 0)];
        setRandom(randomChoice)
        setSelected(param)

        console.log(param, 'param')
        console.log(randomChoice, 'random')

        if (param === randomChoice) {
            console.log('Draw')
            setMsg("Draw");
        } else {
            if (param === "paper" && randomChoice === "rock") {
                console.log('You win')
                setScore(score+1)
                setMsg("You win");
            } else if (param === "rock" && randomChoice === "scissors") {
                console.log('You win')
                setScore(score+1)
                setMsg("You win");
            } else if (param === "scissors" && randomChoice === "paper") {
                console.log('You win')
                setScore(score+1)
                setMsg("You win");
            } else {
                setScore(score-1)
                console.log('You lose')
                setMsg("You lose");
            }
        }
    };

    const resetGame = () => {
        setStarted(false);
    };

    return (
        <div>
            <Header score={score} />
                
            {start === false ? (
                <Body selectValue={getSelectedValue} />
            ) : (
                <StartedGame
                    message={msg}
                    reset={resetGame}
                    selected={selected}
                    random={random}
                />
            )}
            <span className="attribution">
                A Frontend Mentor challenge coded by <a href="https://github.com/markorodriguez">Marko</a>
            </span>
        </div>
    );
};

export default App;
