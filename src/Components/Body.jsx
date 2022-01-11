import React from "react";
import Scissors from "../images/icon-scissors.svg"
import Paper from "../images/icon-paper.svg"
import Rock from "../images/icon-rock.svg"
import Item from "./Item";
import BgTriangle from "../images/bg-triangle.svg"

const Body = (props) => {
    
    const chooseOption = (value) => {
        props.selectValue(value)
    }

    return(
        <>
        <div className="container container--body body">
            <img className="body__imgbg" src={BgTriangle} alt="triangle-bg" />
            <div className="grid--112">
                <Item function={chooseOption} name={'paper'} classId={"item--paper f-1l"}   icon={Paper}/>
                <Item function={chooseOption}  name={'scissors'} classId={"item--scissors f-1r"} icon={Scissors}/>
                <Item function={chooseOption}  name={'rock'} classId={"item--rock f-2d "}  icon={Rock}/>
            </div>
        </div>
        </>
    )
}

export default Body;