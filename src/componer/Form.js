import React from "react";

function Form({ handlerSubmit, valueTask, handlerChangeValue }) {
  return (
    <div>
      <form autoComplete="off" className="form" onSubmit={handlerSubmit}>
        <input
          type="text"
          id="newitem"
          value={valueTask}
          onChange={handlerChangeValue}
        />
        <button className="submit" type="submit">
          ➕
        </button>
      </form>
    </div>
  );
}

export default Form;
