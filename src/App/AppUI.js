import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodosLoading } from "../TodoLoading";
import { TodosError } from "../ErrorTodos";
import { EmptyTodos } from "../EmptyTodos";
import "./App.css";

function AppUI() {
   const {
      loading,
      error,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
   } = React.useContext(TodoContext);
   return (
      <React.Fragment>
         <h1 className="app-title">Tasks to do!</h1>
         <TodoCounter />
         <TodoSearch />
         <TodoList>
            {loading && <TodosLoading></TodosLoading>}
            {error && <TodosError />}
            {!loading && !searchedTodos.length && <EmptyTodos />}

            {searchedTodos.map((todo) => (
               <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
               />
            ))}
         </TodoList>
         {!!openModal && <Modal></Modal>}

         <CreateTodoButton setOpenModal={setOpenModal} />
      </React.Fragment>
   );
}

export { AppUI };
