import React from "react";
import boxImg from "./box-image.png";
import "./EmptyTodos.css";

const styleImage = {
   width: "200px",
};

function EmptyTodos() {
   return (
      <div className="empty-container">
         <img
            className="empty-image"
            src={boxImg}
            style={styleImage}
            alt="Empty box"
         />
         <p className="empty-message">
            You do not have any task. <br></br> Press (+) to add a new task.
         </p>
      </div>
   );
}

export { EmptyTodos };
