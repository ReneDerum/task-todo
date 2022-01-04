import React from "react";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import "./TodoItem.css";

function TodoItem(props) {
   return (
      <li className="item-container">
         <CompleteIcon
            completed={props.completed}
            onComplete={props.onComplete}
         />
         <p className={` item-text ${props.completed && "item-text--active"}`}>
            {props.text}
         </p>
         <DeleteIcon onDelete={props.onDelete} />
      </li>
   );
}

export { TodoItem };
