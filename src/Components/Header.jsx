import React from "react"
import Score from "./Score";

const Header = (props) => {
    return(
        <div className="header container">
            <div className="header__title">
                <h1>Rock</h1>
                <h1>Paper</h1>
                <h1>Scissors</h1>
            </div>
            <Score score={props.score}/>
        </div>
    )
}

export default Header;