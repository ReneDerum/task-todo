import React from "react";
import errorImage from "./error-icon5.jpg";
import "./ErrorTodos.css";

function TodosError() {
   const styleImage = {
      width: "200px",
   };
   return (
      <div className="error-container">
         <img
            className="error-image"
            src={errorImage}
            style={styleImage}
            alt="Empty box"
         />
         <p className="error-message">
            There was an error <br></br> Try again later
         </p>
      </div>
   );
}

export { TodosError };
