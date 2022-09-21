import React, { useState } from "react";
import { useEffect } from "react";
import Wrapper from "../assets/wrappers/JobsContainer";
import Job from "../components/Job";
import customFetch from "../utils/axios";
import Loading from "../components/Loading";
const AllTodo = () => {
  return (
    <Wrapper>
      <h5>
      5 Found
      </h5>
      <div className="jobs">
        {[1,2,3,4,5,]?.map((user) => {
          return (
            <Job
              key={user.id}
              {...user}
             
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default AllTodo;
