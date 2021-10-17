import React from "react";

const url = `https://www.google.com/travel/flights`;

function Link(){
    return(
        <a
        href={url}
        target="_blank"
        className="link"
        >
        click me
        </a>
    )
}
export default Link;