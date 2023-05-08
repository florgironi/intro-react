import React from "react";
import './HeaderDate.css'

function HeaderDate(){
    return(
        <div className="containerHeader">
            <span className="date"> 27/03/23
            </span>
            <span className="whoWrites"> @florgironi
            </span>
        </div>
    );
}
export { HeaderDate };