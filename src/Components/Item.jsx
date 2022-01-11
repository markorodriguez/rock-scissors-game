import React from "react";

const Item = (props) => {
    return(
        <div className={props.classId}>
            <div className="item--external" onClick={()=>{
                props.function(props.name)
            }} >
            <img src={props.icon} alt="icon_option" />
            </div>
        </div>
    )
}

export default Item;