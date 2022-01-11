import React from "react";

const Score = (props) => {
  return (
    <div className="header__score">
      <span className="header__score-title">Score</span>
      <span className="header__score-points">{props.score}</span>
    </div>
  );
};

export default Score;
