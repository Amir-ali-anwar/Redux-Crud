import React from 'react'
import Wrapper from "../assets/wrappers/Job";
import { Link } from "react-router-dom";
import Button from '../components/Button'
import customFetch from "../utils/axios";
import { useEffect } from 'react';
const Job = ({ name, position, id, submitDatatoServer }) => {
  let link = `/edit/${id}`;
  const deleteDatatoServer = async (id) => {
    try {
      const result = await customFetch.delete(`/users/${id}`);
      return result.data;
    } catch (error) {
      console.log(error);
    }
  };
  const deleteHandler = async (id) => {
    await deleteDatatoServer(id);
  };
  useEffect(() => {
    submitDatatoServer();
  }, [deleteHandler]);
  return (
    <Wrapper className="content">
      <header>
        <div className="main-icon">{name.charAt(0) || 'No'}</div>
        <div className="info">
          <p>{name}</p>
          <h5>{position}</h5>
        </div>
      </header>
      <footer>
        <div className="actions">
          <Link className="btn edit-btn" to={link}>
            edit
          </Link>
          <Button
            type="button"
            className="btn delete-btn"
            handleChange={() => deleteHandler(id)}
          >
            Delete
          </Button>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Job