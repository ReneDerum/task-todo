import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
   const { totalTodos, completedTodos } = React.useContext(TodoContext);

   return (
      <h5 className="TodoCounter">
         You have completed {completedTodos} tasks out of {totalTodos}
      </h5>
   );
}

export { TodoCounter };
