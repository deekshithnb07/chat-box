import React from "react";

function Flights (props){
    const options = [
        {
          text: "flights available",
          handler: props.actionProvider.handleAvailable,
          id: 1
        },
        { text: "price", handler: props.actionProvider.handlePrice, id: 2 },
        { text: "contact", handler: props.actionProvider.handleContact, id: 3 },
        { text: "hello", handler: props.actionProvider.handle, id: 4 },
      ];

      const optionsMarkup = options.map((option) => (
        <button
          className="option-button"
          key={option.id}
          onClick={option.handler}
        >
          {option.text}
        </button>
      ));
    return(
        <div>{optionsMarkup}</div>
    );
}

export default Flights;