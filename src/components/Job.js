import React from 'react'
import Wrapper from "../assets/wrappers/Job";
import { Link } from "react-router-dom";
import Button from './Button'
import customFetch from "../utils/axios";
import { useEffect } from 'react';
const Job = ({ name='amir', position='amir' }) => {
  return (
    <Wrapper className="content">
      <header>
        <div className="main-icon">{'No'}</div>
        <div className="info">
          <p>{name}</p>
          <h5>{position}</h5>
        </div>
      </header>
      <footer>
        <div className="actions">
          <Link className="btn edit-btn" >
            edit
          </Link>
          <Button
            type="button"
            className="btn delete-btn"
            // handleChange={() => deleteHandler(id)}
          >
            Delete
          </Button>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Job