import React from "react";

const TodoItem = ({ id, todoName, todoDate, onDeleteClick }) => {
  return (
    <div className="container">
      <div className="row marginRow">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger buttonWidth"
            onClick={() => onDeleteClick(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
