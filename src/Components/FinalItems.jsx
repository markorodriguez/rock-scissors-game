import React from "react";

const FinalItem = (props) => {

    return(
        <div className={props.classId}>
            <div className="item--external">
            <img src={props.icon} alt="icon_option" />
            </div>
        </div>
    )
}

export default FinalItem;