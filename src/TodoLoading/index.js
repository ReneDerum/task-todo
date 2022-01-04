import React from "react";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import "./TodosLoading.css";

function TodosLoading() {
   return (
      <section>
         <div className="LoadingTodo-container">
            <CompleteIcon className="LoadingTodo-container" />
            <p className="LoadingTodo-text">Loading . . .</p>
            <DeleteIcon className="LoadingTodo-deleteIcon" />
         </div>
         <div className="LoadingTodo-container">
            <CompleteIcon className="LoadingTodo-container" />
            <p className="LoadingTodo-text">Loading . . .</p>
            <DeleteIcon className="LoadingTodo-deleteIcon" />
         </div>
         <div className="LoadingTodo-container">
            <CompleteIcon className="LoadingTodo-container" />
            <p className="LoadingTodo-text">Loading . . .</p>
            <DeleteIcon className="LoadingTodo-deleteIcon" />
         </div>
      </section>
   );
}

export { TodosLoading };
