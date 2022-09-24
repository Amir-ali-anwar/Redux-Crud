import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Wrapper from "../assets/wrappers/JobsContainer";
import Job from "../components/Job";
import customFetch from "../utils/axios";
import Loading from "../components/Loading";
import { fetchTodos } from "../reducers/todoaction";
const AllTodo = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.data);
  console.log(data);
  const isLoading = useSelector((state) => state?.isLoading);
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  if (isLoading) {
    return <Loading center />;
  }
  return (
    <Wrapper>
      <h5>
        {data.length} user{data.length > 1 && "s"} Found
      </h5>
      <div className="jobs">
        {data?.map((user) => {
          return <Job key={user.id} {...user} />;
        })}
      </div>
    </Wrapper>
  );
};

export default AllTodo;
