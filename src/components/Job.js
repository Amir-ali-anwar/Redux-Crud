import React, { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/Job";
import { Link } from "react-router-dom";
import Button from './Button'
import { useDispatch } from "react-redux";
import { fetchTodos, deleteTodo } from "../reducers/todoaction";
const Job = ({ name, position, id }) => {
  const dispatch = useDispatch();
  const submitHandler=()=>{
   dispatch(deleteTodo(id))
  dispatch(fetchTodos())
  }
  return (
    <Wrapper className="content">
      <header>
        <div className="main-icon">{"No"}</div>
        <div className="info">
          <p>{name}</p>
          <h5>{position}</h5>
        </div>
      </header>
      <footer>
        <div className="actions">
          <Link className="btn edit-btn">edit</Link>
          <Button
            type="button"
            className="btn delete-btn"
            handleChange={() =>submitHandler()}
          >
            Delete
          </Button>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Job