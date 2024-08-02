import React from "react";
import styles from "./AddTodo.module.css";

const AddTodo = () => {
  return (
    <div className="container text-center">
      <div className="row marginRow">
        <div className="col-6">
          <input
            className={styles.addInput}
            type="text"
            placeholder="Enter todo..."
          />
        </div>
        <div className="col-4">
          <input className={styles.addInput} type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success buttonWidth">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
