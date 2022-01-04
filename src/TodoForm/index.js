import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
   const [newTodoValue, setNewTodoValue] = React.useState("");
   const { addTodo, setOpenModal } = React.useContext(TodoContext);
   const onCancel = () => {
      setOpenModal(false);
   };
   const onSubmit = (event) => {
      event.preventDefault();
      addTodo(newTodoValue);
      setOpenModal(false);
   };
   const onChange = (event) => {
      setNewTodoValue(event.target.value);
   };

   return (
      <form className="todo-form" onSubmit={onSubmit}>
         <label className="todo-form__title">Enter a new TODO</label>
         <textarea
            className="todo-form__text"
            value={newTodoValue}
            onChange={onChange}
            placeholder="Enter a task"
         />
         <div>
            <button
               className="todo-button todo-button--close"
               type="button"
               onClick={onCancel}
            >
               Close
            </button>
            <button className="todo-button todo-button--create" type="submit">
               Create
            </button>
         </div>
      </form>
   );
}
export { TodoForm };
