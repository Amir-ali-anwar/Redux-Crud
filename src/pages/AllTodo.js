import React, { useState } from "react";
import { useEffect } from "react";
import Wrapper from "../assets/wrappers/JobsContainer";
import Job from "../components/Job";
import customFetch from "../utils/axios";
import Loading from '../components/Loading';
const AllTodo = () => {
  const [users, Setusers] = useState([]);
  const [isLoading, SetisLoading] = useState(true);
  const submitDatatoServer = async () => {
    try {
      const result = await customFetch.get("/users");
      Setusers(result.data);
      SetisLoading(false);
    } catch (error) {
      console.log(error);
      SetisLoading(false)
    }
  };
  useEffect(() => {
    submitDatatoServer();
  }, []);
  if (isLoading) {
    return <Loading center />;
  }
  return (
    <Wrapper>
      <h5>
        {users.length} user{users.length > 1 && "s"} Found
      </h5>
      <div className="jobs">
        {users?.map((user) => {
          return (
            <Job
              key={user.id}
              {...user}
              submitDatatoServer={submitDatatoServer}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default AllTodo;
